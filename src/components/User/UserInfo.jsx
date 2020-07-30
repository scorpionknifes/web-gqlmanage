import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    infoviewcontainer: {
        width: "100%",
        overflowX: "auto",
        maxWidth: 700,
    },
    infoviewtable: {
        minWidth: 500,
    },
    devicetablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const UserInfo = ({user}) => {
    const classes = useStyles();
    return (
    <TableContainer component={Paper} className={classes.infoviewcontainer}>
        <Table className={classes.infoviewtable} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.devicetablecell}>
                        <Typography gutterBottom variant="h6">{user?.location}</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><b>Abbreviation</b></TableCell>
                    <TableCell>{user?.abbr}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Email Domain</b></TableCell>
                    <TableCell>{"EMAIL@"+user?.email}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Openhab Cloud</b></TableCell>
                    <TableCell>{user?.openhab}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
    
}

export default UserInfo