import React from 'react'
import { Grid } from '@material-ui/core'
import DeviceCard from '../../components/Device/DeviceCard'


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
        <div>
            <Grid container spacing={4}>
                {data?.sort((a, b) => (a.name > b.name) - (a.name < b.name)).map(d => {
                    return <Grid item sm={6} md={4} lg={3} container>
                        <DeviceCard id={d.id} name={d.name} model={d.model} memo={d.memo} status={d.status} type={d.type} />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default Devices