import React, { useState } from 'react'
// import EmployeeForm from "./EmployeeForm";
import PageHeader from "./scoreUtils/PageHeader";
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "./scoreUtils/useTable";
import * as employeeService from "./employeservice";
import Controls from "./scoreUtils/controls/Controls";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    searchInput: {
        width: '75%'
    }
}))


const headCells = [
    { id: 'fullName', label: 'Student Name' },
    { id: 'email', label: 'Email Address ' },
    { id: 'Obtained', label: 'Obtained Marks ' },
    { id: 'Total Marks', label: 'Total Marks', disableSorting: true },
]

export default function Participants() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const [userData,setUserData] = useState([{email:'abc@gmail.com',name:'xyz',obtained:'20',total:'30'},
    ,{email:'bob@gmail.com',name:'bob',obtained:'15',total:'30'},
    {email:'alice@gmail.com',name:'alice',obtained:'25',total:'30'}
    ])

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    return (
        <>
            <PageHeader
                title="Quiz Name Score Card "
            />
            <Paper >
                <Toolbar className={classes.pageContent}>
                    <Controls.Input
                        label="Search Students"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}
                    />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.fullName}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.Obtained}</TableCell>
                                    <TableCell>{item.Total}</TableCell>
                                </TableRow>)
                            )
                        }

{ 
                                userData.map((item,index) =>{
                                    return <TableRow >
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.obtained}</TableCell>
                                    <TableCell>{item.total}</TableCell>
                                </TableRow>
                                })
                                }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
    )
}
