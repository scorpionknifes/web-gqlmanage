import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'
import EmailRow from './EmailRow';

const useStyles = makeStyles({
    emailsviewcontainer: {
        width: "100%",
        overflowX: "auto",
    },
    emailsviewtable: {
        minWidth: 500,
    },
    emailstablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const columns = [
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'from', label: 'From', minWidth: 170 },
    { id: 'createdDate', label: 'Created Date', minWidth: 170 },
];


const EmailTable = ({emails}) => {
    const classes = useStyles();
    return <TableContainer component={Paper} className={classes.emailsviewcontainer}>
        <Table className={classes.emailsviewtable} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    {columns.map(column => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {emails?.slice(0).reverse().map(email => (
                    <EmailRow key={email.id} email={email}/>
                ))}

            </TableBody>
        </Table>
    </TableContainer>
}

export default EmailTable