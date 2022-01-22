import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const ActivityList = (props) => (
    <TableContainer component={Paper}>
        <Table style={{minWidth: "500px"}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Descriere</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Data inceput</TableCell>
                    <TableCell align="left">Data sfarsit</TableCell>
                    <TableCell align="left">Surprins</TableCell>
                    <TableCell align="left">Confuz</TableCell>
                    <TableCell align="left">Fericit</TableCell>
                    <TableCell align="left">Trist</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {typeof props.activities !== 'undefined' && props.activities.length > 0 && props.activities.map(activity => (
                    <TableRow key={activity.id}>
                        <TableCell component="th" scope="row">
                            {activity.name}
                        </TableCell>
                        <TableCell> {activity.id} </TableCell>
                        <TableCell align="left">{new Date(activity.start_date).toLocaleString()}</TableCell>
                        <TableCell align="left">{new Date(activity.end_date).toLocaleString()}</TableCell>
                        <TableCell align="left">{activity.count_emoji3}</TableCell>
                        <TableCell align="left">{activity.count_emoji4}</TableCell>
                        <TableCell align="left">{activity.count_emoji1}</TableCell>
                        <TableCell align="left">{activity.count_emoji2}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default ActivityList;
