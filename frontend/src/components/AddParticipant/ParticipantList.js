import React, { useState, useEffect } from "react";
import PageHeader from "../../components/scoreUtils/PageHeader";
import * as XLSX from "xlsx";
import Button from "../scoreUtils/controls/Button";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "../../components/scoreUtils/useTable";
import Controls from "../../components/scoreUtils/controls/Controls";
import { Search } from "@material-ui/icons";
import ParticipantForm from "./ParticipantForm";

import { useAuth } from "../../contexts/AuthContext";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  tableHead: {
    backgroundColor: '#003cff24',
  },
}));

const headCells = [
  { id: "name", label: "Student Name" },
  { id: "email", label: "Email Address " },
];

export default function ParticipantList() {
  const { currentUser } = useAuth();

  const classes = useStyles();

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [userData, setUserData] = useState([]);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(userData, headCells, filterFn);

  const downloadExcel = () => {
    const quizID = new URLSearchParams(window.location.search).get("quizID");
    const workSheet = XLSX.utils.json_to_sheet(userData);
    const workBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, "Participants");
    //Buffer
    let buf = XLSX.write(workBook, { bookType: "xlsx", type: "buffer" });
    //Binary string
    XLSX.write(workBook, { bookType: "xlsx", type: "binary" });
    //Download;
    XLSX.writeFile(workBook, "ParticipantsList_quizID-" + quizID + ".xlsx");
  };

  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        creator: currentUser.email.replace(".", ""),
        quizID: new URLSearchParams(window.location.search).get("quizID"),
      }),
    };
    fetch("http://localhost:5000/api/getParticipants", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let pl = [];
        for (let key in data) {
          if (typeof data[key] === "object") {
            pl.push({ name: data[key].name, email: data[key].emailID });
          }
        }
        console.log(data);
        setUserData(pl);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.name.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <br />
      <h5 className="ml-5">Participant List</h5>
      <ParticipantForm setUser={setUserData} user={userData} />
      <Paper>
        <Toolbar className={classes.pageContent}>
          <Controls.Input
            label="Search Students"
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <Button
            text="Export"
            className="ml-5"
            onClick={downloadExcel}
          ></Button>
        </Toolbar>
        <TblContainer>
          <TblHead className={classes.tableHead} />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
}
