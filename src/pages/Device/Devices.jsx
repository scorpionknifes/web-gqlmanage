import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import DeviceCard from '../../components/Device/DeviceCard'
import DeviceGrid from '../../components/Device/DeviceGrid'


const room = {
    id: "mongoid",
    roomNumber: "1023"
}

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


const Devices = () => {
    return (
        <>
            <Typography variant="h4">All Devices</Typography>
            <br />
            <DeviceGrid data={data}/>
        </>
    )
}

export default Devices