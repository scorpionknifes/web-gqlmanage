import React from 'react'
import { useParams } from 'react-router-dom';
import EditButton from '../../components/Button/EditButton';
import { DeviceView } from '../../components/Device';
import { Typography } from '@material-ui/core';

const device = {
    id: "mydeviceid",
    room: "myroomid",
    name: "Main Light",
    model: "PAN04",
    macAddress: "00:00:00:00:00",
    memo: "My Custom Memo",
    serialNumber: "ABCDEFG",
    status: "status",
    createdDate: "",
    lastModifed: ""
}

const Device = () => {
    let { id } = useParams()
    return <>
        <Typography variant="h4">Device - {device.name}</Typography>
        <br />
        <EditButton edit={`/device/edit/${id}`} back={`/room/${device.room}`} />
        <br />
        <DeviceView />
    </>
}
export default Device