import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const ActivityListStud = (props) => (
    <TableContainer component={Paper}>
        <Table style={{minWidth: "500px"}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Descriere</TableCell>
                    <TableCell align="center">Data inceput</TableCell>
                    <TableCell align="center">Data sfarsit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={props.activity.id}>
                    <TableCell component="th" scope="row">
                        {props.activity.name}
                    </TableCell>
                    <TableCell align="center">{new Date(props.activity.start_date).toLocaleString()}</TableCell>
                    <TableCell align="center">{new Date(props.activity.end_date).toLocaleString()}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
);

export default ActivityListStud;
