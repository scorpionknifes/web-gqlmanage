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

const Add = () => {
    const classes = useStyles()
    /*
        id: ID!
        roomNumber: String!
        memo: String!
        devices: [Device!]!
        username: String!
        password: String!
        createdDate:  Time!
    */

    const [roomNumber, setRoomNumber] = useState("")
    const [memo, setMemo] = useState("")

    return (
        <div className={classes.root}>
            <>
        
            </>
            <div>
                <SimpleTextField name="Name" helper="name description (optional)" value={name}/>
                <SimpleTextField name="MAC Address" helper="mac address" required value={macAddress}/>
                <SimpleTextField name="Memo" helper="memo (optional)" value={memo}/>
                <SimpleTextField name="Serial Number" helper="serial number" value={sn} required />
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

export default Add
