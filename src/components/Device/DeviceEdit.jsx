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

const DeviceEdit = ({ room }) => {
    let { id } = useParams()
    const classes = useStyles()

    const [roomNumber, setRoomNumber] = useState()
    const [memo, setMemo] = useState()

    useEffect(() => {
        setMemo(room?.memo)
        setRoomNumber(room?.roomNumber)
    }, [room])

    return (
        <div className={classes.root}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={id} />
                <SimpleTextField name="Room Number" helper="room number" required value={roomNumber} />
                <SimpleTextField name="Memo" helper="memo (optional)" value={memo} />
                <SimpleTextField name="Username" helper="" disabled value={room?.username} />
                <SimpleTextField name="Password" helper="" disabled value={room?.password} />
                <SimpleDateField name="Created Date" helper="" disabled value={room?.createdDate} />
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
