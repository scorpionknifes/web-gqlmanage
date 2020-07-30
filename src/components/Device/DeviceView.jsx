import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Table, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    deviceviewcontainer: {
        width: "100%",
        overflowX: "auto",
        maxWidth: 700,
    },
    deviceviewtable: {
        minWidth: 500,
    },
    devicetablecell: {
        whiteSpace: 'nowrap',
        width: 100,
    }
});

const DeviceView = ({device}) => {
    const classes = useStyles();
    return (
    <TableContainer component={Paper} className={classes.deviceviewcontainer}>
        <Table className={classes.deviceviewtable} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.devicetablecell}>
                        <Typography gutterBottom variant="h6">{device?.name}</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><b>Room Number</b></TableCell>
                    <TableCell>{device?.room?.roomNumber}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Name</b></TableCell>
                    <TableCell>{device?.name}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Model</b></TableCell>
                    <TableCell>{device?.model}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>MAC Address</b></TableCell>
                    <TableCell>{device?.macAddress}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Memo</b></TableCell>
                    <TableCell>{device?.memo}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Serial Number</b></TableCell>
                    <TableCell>{device?.serialNumber}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Status</b></TableCell>
                    <TableCell>{device?.status}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Type</b></TableCell>
                    <TableCell>{device?.type}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Created Date</b></TableCell>
                    <TableCell>{device?.createdDate}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Last Modified</b></TableCell>
                    <TableCell>{device?.lastModified}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
    
}

export default DeviceView