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
        width: 100,
    }
});

const device = {
    id: "mydeviceid",
    room: "myroomid",
    name: "Main Light",
    model: "PAN04",
    macAddress: "00:00:00:00:00",
    memo: "My Custom Memo",
    serialNumber: "ABCDEFG",
    status: 1,
    type: 1,
    createdDate: "2020-07-22T07:36:06Z",
    lastModifed: "2020-07-22T07:36:06Z"
}

const DeviceView = () => {
    const classes = useStyles();
    return (
    <TableContainer component={Paper} className={classes.deviceviewcontainer}>
        <Table className={classes.deviceviewtable} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.devicetablecell}>
                        <Typography gutterBottom variant="h6">{device.name}</Typography>
                    </TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell><b>MAC Address</b></TableCell>
                    <TableCell>{device.macAddress}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Memo</b></TableCell>
                    <TableCell>{device.memo}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Serial Number</b></TableCell>
                    <TableCell>{device.serialNumber}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>status</b></TableCell>
                    <TableCell>{device.status}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Created Date</b></TableCell>
                    <TableCell>{device.createdDate}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell><b>Last Modifed</b></TableCell>
                    <TableCell>{device.lastModifed}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
    )
    
}

export default DeviceView