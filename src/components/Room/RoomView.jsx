import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    roomviewcontainer: {
        width: "100%",
        overflowX: "auto",
        maxWidth: 700,
    },
    roomviewtable: {
        minWidth: 500,
    },
    roomtablecell: {
        width: 100,
    }
});

const room = {
    id: "myroomid",
    roomNumber: "1023",
    memo: "my room memo",
    username: "room1023",
    password: "examplepassword",
    createdDate: "2020-07-22T07:36:06Z"
}

const RoomView = () => {
    const classes = useStyles();
    return (
    <TableContainer component={Paper} className={classes.roomviewcontainer}>
        <Table className={classes.roomviewtable} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.roomtablecell}>
                        <Typography gutterBottom variant="h6">Room </Typography>
                    </TableCell>
                    <TableCell>
                        <Typography gutterBottom variant="h6">{room.roomNumber} </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><b>Memo</b></TableCell>
                    <TableCell>{room.memo}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Username</b></TableCell>
                    <TableCell>{room.username}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Password</b></TableCell>
                    <TableCell>{room.password}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Created Date</b></TableCell>
                    <TableCell>{room.createdDate}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
    
}

export default RoomView