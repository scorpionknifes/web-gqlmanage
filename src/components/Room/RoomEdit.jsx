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
    const [roomNumber, setRoomNumber] = useState("")
    const [memo, setMemo] = useState("")
    const [createdDate, setCreatedDate] = useState("")

    return (
        <div className={classes.root}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={id}/>
                <SimpleTextField name="Room Number" helper="Room Number" disabled value={roomNumber}/>
                <SimpleTextField name="Memo" helper="memo (optional)" value={memo}/>
                <SimpleDateField name="Created Date" helper="" disabled value={createdDate}/>
                <SimpleSelectionField/>
            </div>
        </div>
    );
}

export default RoomEdit
