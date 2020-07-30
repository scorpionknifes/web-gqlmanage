import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    usersviewcontainer: {
        width: "100%",
        overflowX: "auto",
    },
    usersviewtable: {
        minWidth: 500,
    },
    userstablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'username', label: 'Username', minWidth: 170 },
];


const UserTable = ({users}) => {
    const classes = useStyles();
    return <TableContainer component={Paper} className={classes.usersviewcontainer}>
        <Table className={classes.usersviewtable} aria-label="simple table">
            <TableHead>
                <TableRow>
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
                {users?.map(user => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>
    </TableContainer>
}

export default UserTable