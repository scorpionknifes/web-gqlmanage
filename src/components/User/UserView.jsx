import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    userviewcontainer: {
        width: "100%",
        overflowX: "auto",
        maxWidth: 700,
    },
    userviewtable: {
        minWidth: 500,
    },
    usertablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const UserView = ({ user }) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper} className={classes.userviewcontainer}>
            <Table className={classes.userviewtable} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.usertablecell}>
                            <Typography gutterBottom variant="h6">{user?.name}</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell>{user?.name}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>)
}
export default UserView