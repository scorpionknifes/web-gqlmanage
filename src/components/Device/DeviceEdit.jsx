import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {SimpleDateField, SimpleSelectionField, SimpleTextField} from '../Form/SimpleFields'

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

const RoomEdit = () => {
    const classes = useStyles()

    const [id, setID] = useState("")
    const [room, setRoom] = useState("")
    const [name, setName] = useState("")
    const [macAddress, setMacAddress] = useState("")
    const [memo, setMemo] = useState("")
    const [sn, setSN] = useState("")
    const [createdDate, setCreatedDate] = useState("")
    const [lastModified, setLastModified] = useState("")

    return (
        <div className={classes.root}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={id}/>
                <SimpleTextField name="Room ID" helper="database ID" disabled value={room}/>
                <SimpleTextField name="Name" helper="name description (optional)" value={name}/>
                <SimpleTextField name="MAC Address" helper="mac address" required value={macAddress}/>
                <SimpleTextField name="Memo" helper="memo (optional)" value={memo}/>
                <SimpleTextField name="Serial Number" helper="serial number" value={sn} required />
                <SimpleDateField name="Created Date" helper="" disabled value={createdDate}/>
                <SimpleDateField name="Last Modified" helper="" disabled value={lastModified}/>
                <SimpleSelectionField/>
                <SimpleSelectionField/>
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

export default RoomEdit
