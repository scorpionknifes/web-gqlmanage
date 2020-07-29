import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router-dom'
import { SimpleDateField, SimpleTextField } from '../Form/SimpleFields'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '700px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const DeviceEdit = props => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={props.id} />
                <SimpleTextField name="Room Number" helper="room number" disabled value={props.roomNumber} />
                <SimpleTextField name="Name" helper="fully qualified name" required onChange={props.setName} value={props.name} />
                <SimpleTextField name="Model" helper="model number" required onChange={props.setModel} value={props.model} />
                <SimpleTextField name="MAC Address" helper="device mac address (optional)" onChange={props.setMacAddress} value={props.macAddress} />
                <SimpleTextField name="Memo" helper="memo (optional)" onChange={props.setMemo} value={props.memo} />
                <SimpleTextField name="Serial Number" helper="serial number" required onChange={props.setSerialNumber} value={props.serialNumber} />
                <SimpleTextField name="Status" helper="status" onChange={props.setStatus} value={props.status} />
                <SimpleTextField name="Type" helper="type" onChange={props.setType} value={props.type} />
            </div>
        </div>
    );
}

function formatMAC(e) {
    var r = /([a-f0-9]{2})([a-f0-9]{2})/i,
        str = e.target.value.replace(/[^a-f0-9]/ig, "");

    while (r.test(str)) {
        str = str.replace(r, '$1' + ':' + '$2');
    }

    e.target.value = str.slice(0, 17);
};

export default DeviceEdit
