import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'
import VerifyButton from '../Button/VerifyButton';

const useStyles = makeStyles({
    openhabviewcontainer: {
        width: "100%",
        overflowX: "auto",
        maxWidth: 700,
    },
    openhabviewtable: {
        minWidth: 500,
    },
    openhabtablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const OpenhabCloud = props => {
    const classes = useStyles()

    return <>
        <Typography variant="h5">Sign up to OpenHAB Cloud on custom server</Typography>
        <br />
        <Typography style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => window.open(props.openhab)} variant="h6">{props.openhab}</Typography>
        <br />
        <TableContainer component={Paper} className={classes.openhabviewcontainer}>
            <Table className={classes.openhabviewtable} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.openhabtablecell}>
                            <Typography gutterBottom variant="h6">Login Detail</Typography>
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow hover title="copy to clipboard" style={{ cursor: "pointer" }} onClick={() => navigator.clipboard.writeText(props.username)}>
                        <TableCell><b>Username</b></TableCell>
                        <TableCell>{props.username}</TableCell>
                    </TableRow>
                    <TableRow hover title="copy to clipboard" style={{ cursor: "pointer" }} onClick={() => navigator.clipboard.writeText(props.password)}>
                        <TableCell><b>Password</b></TableCell>
                        <TableCell>{props.password}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        <br />
        <VerifyButton/>
    </>
}

export default OpenhabCloud