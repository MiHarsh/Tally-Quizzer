import React, { useState } from 'react'
// import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/scoreUtils/PageHeader";
// import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from "../../components/scoreUtils/useTable";
import * as employeeService from "../../components/employeservice";
import Controls from "../../components/scoreUtils/controls/Controls";
import { Search } from "@material-ui/icons";
import ParticipantForm from "./ParticipantForm";

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
]

export default function ParticipantList() {

    const classes = useStyles();
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);

    const [userData,setUserData] = useState([{email:'abc@gmail.com',name:'xyz'},{email:'bob@gmail.com',name:'bob'},
    {email:'alice@gmail.com',name:'alice'}])
    

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
            <br/>
                <h5 className="ml-5">Participant List</h5>
            <ParticipantForm />
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
                                </TableRow>)
                            )
                        }
                                { 
                                userData.map((item,index) =>{
                                    return <TableRow >
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
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
