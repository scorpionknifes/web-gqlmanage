import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { RoomView } from '../../components/Room';
import EditButton from '../../components/Button/EditButton';
import Devices from '../Device/Devices';
import { Typography } from '@material-ui/core';
import AddButton from '../../components/Button/AddButton';
import DeviceGrid from '../../components/Device/DeviceGrid';

const data = [
    {
        id: "mongoid",
        room: "mongoid",
        name: "Main Light",
        model: "PAN04-2",
        memo: "My Demo Memo",
        type: 0,
        status: 0
    },
    {
        id: "mongoid",
        room: "mongoid",
        name: "Main Light",
        model: "PAN04-2",
        memo: "My Demo Memo",
        type: 1,
        status: 1
    },
    {
        id: "mongoid",
        room: "mongoid",
        name: "Main Light",
        model: "PAN04-2",
        memo: "My Demo Memo",
        type: 2,
        status: 2
    },
    {
        id: "mongoid",
        room: "mongoid",
        name: "Main Light",
        model: "PAN04-2",
        memo: "My Demo Memo",
        type: 2,
        status: 3
    },
    {
        id: "mongoid",
        room: "mongoid",
        name: "Main Light",
        model: "PAN04-2",
        memo: "My Demo Memo",
        type: 2,
        status: 4
    }
]

const Room = () => {
    let { id } = useParams()
    return <>
        <Typography variant="h4">Room {id}</Typography>
        <br />
        <EditButton edit={`/room/edit/${id}`} back={`/rooms`} />
        <br />
        <RoomView />
        <br />
        <Typography variant="h4">Devices</Typography>
        <br />
        <AddButton />
        <br />
        <DeviceGrid data={data}/>
    </>
}

export default Room