import React, { useState } from "react";

import PageHeader from "../../components/scoreUtils/PageHeader";
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
  { id: "quizName", label: "Quiz Name" },
  { id: "pCount", label: "No. of Participants" },
  { id: "start", label: "Quiz Date" },
  { id: "average", label: "Average Marks" },
  { id: "highest", label: "Highest Marks " },
  { id: "total", label: "Total Marks" },
];

export default function Stats() {
  const classes = useStyles();
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const [userData, setUserData] = useState([
    {
      quizName: "Math-I",
      pCount: "85",
      start: "17/07/2022",
      highest: "94",
      average: "56",
      total: "100",
    },
    ,
    {
      quizName: "Math-II",
      pCount: "75",
      start: "16/07/2022",
      highest: "90",
      average: "59",
      total: "100",
    },
    {
      quizName: "Math-II",
      pCount: "95",
      start: "17/07/2022",
      highest: "91",
      average: "60",
      total: "100",
    },
  ]);
  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(userData, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <div className="mx-5 mt-4">
      <PageHeader title="Quiz Stat" />
      <Paper>
        <Toolbar className={classes.pageContent}>
          <Controls.Input
            label="Search"
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
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.quizName}</TableCell>
                <TableCell>{item.pCount}</TableCell>
                <TableCell>{item.start}</TableCell>
                <TableCell>{item.average}</TableCell>
                <TableCell>{item.highest}</TableCell>
                <TableCell>{item.total}</TableCell>
              </TableRow>
            ))}

            {userData.map((item, index) => {
              return (
                <TableRow>
                  <TableCell>{item.quizName}</TableCell>
                  <TableCell>{item.pCount}</TableCell>
                  <TableCell>{item.start}</TableCell>
                  <TableCell>{item.average}</TableCell>
                  <TableCell>{item.highest}</TableCell>
                  <TableCell>{item.total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </div>
  );
}
