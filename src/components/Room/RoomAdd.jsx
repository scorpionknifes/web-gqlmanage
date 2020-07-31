import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SimpleTextField } from '../Form/SimpleFields'
import { Typography } from '@material-ui/core';
import { DeviceAdd } from '../Device';

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

const RoomAdd = props => {
    const classes = useStyles()

    return (<>
        <Typography variant="h5">Room</Typography>
        <br />
        <div className={classes.root}>
            <SimpleTextField name="Room Number" helper="Room Number" required onChange={e => props.setRoomNumber(e.target.value)} value={props.room?.roomNumber} />
            <SimpleTextField name="Memo" helper="memo (optional)" onChange={e => props.setMemo(e.target.value)} value={props.memo} />
        </div>
        <br />
        <Typography variant="h5">Device</Typography>
        <br />
        <DeviceAdd
            name={props.name} setName={props.setName}
            model={props.model} setModel={props.setModel}
            macAddress={props.macAddress} setMacAddress={props.setMacAddress}
            memo={props.memo} setMemo={props.setMemo}
            serialNumber={props.serialNumber} setSerialNumber={props.setSerialNumber}
            status={props.status} setStatus={props.setStatus}
            type={props.type} setType={props.setType}
        />
        <br />
    </>
    );
}

export default RoomAdd
