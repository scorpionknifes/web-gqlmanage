import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'
import VerifyButton from '../Button/VerifyButton';

const useStyles = makeStyles({
    alexaviewcontainer: {
        width: "100%",
        overflowX: "auto",
        maxWidth: 700,
    },
    alexaviewtable: {
        minWidth: 500,
    },
    alexatablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const Alexa = props => {
    const classes = useStyles()

    return <>
        <Typography variant="h5">Sign up to Alexa</Typography>
        <br />
        <Typography style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => window.open("https://alexa.amazon.com/")} variant="h6">https://alexa.amazon.com/</Typography>
        <br />
        <TableContainer component={Paper} className={classes.alexaviewcontainer}>
            <Table className={classes.alexaviewtable} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.alexatablecell}>
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

export default Alexa