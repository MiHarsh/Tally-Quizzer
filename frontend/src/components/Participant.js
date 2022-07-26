import React, { useState, useEffect } from "react";
import PageHeader from "./scoreUtils/PageHeader";
import { useAuth } from "../contexts/AuthContext";
import * as XLSX from "xlsx";
import Button from "./scoreUtils/controls/Button";

import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@material-ui/core";
import useTable from "./scoreUtils/useTable";

import Controls from "./scoreUtils/controls/Controls";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: 0,
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
}));

const headCells = [
  { id: "fullName", label: "Participant Name" },
  { id: "email", label: "Email Address " },
  { id: "Obtained", label: "Obtained Marks " },
  { id: "Total Marks", label: "Total Marks", disableSorting: true },
];

export default function ParticipantLogin() {
  const { currentUser } = useAuth();

  const classes = useStyles();
  //   const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [userData, setUserData] = useState([
    { email: "abc@gmail.com", name: "xyz", obtained: "20", total: "30" },
    ,
    { email: "bob@gmail.com", name: "bob", obtained: "15", total: "30" },
    { email: "alice@gmail.com", name: "alice", obtained: "25", total: "30" },
  ]);

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
    XLSX.writeFile(workBook, "ScoreCard_quizID-" + quizID + ".xlsx");
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
            delete data[key].answers;
            if (data[key].score === -1) {
              data[key].score = "NA";
              data[key].totalScore = "NA";
            }
            pl.push(data[key]);
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
            x["name"].toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <div className="mx-5 mt-4">
      <PageHeader title="Score Card " />
      <Paper>
        <Toolbar className={classes.pageContent}>
          <Controls.Input
            label="Search Participants"
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
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.emailID}</TableCell>
                <TableCell>{item.score}</TableCell>
                <TableCell>{item.totalScore}</TableCell>
              </TableRow>
            ))}

            {/* {userData.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.obtained}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              );
            })} */}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
}
