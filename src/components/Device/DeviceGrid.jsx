import React from 'react'
import { Grid } from '@material-ui/core'
import DeviceCard from './DeviceCard'

const DeviceGrid = ({devices}) => {
    return (
        <div>
            <Grid container spacing={4}>
                {devices?.slice(0).sort((a, b) => (a.name > b.name) - (a.name < b.name))?.map(d => {
                    return <Grid item sm={6} md={4} lg={3} container>
                        <DeviceCard id={d.id} name={d.name} model={d.model} memo={d.memo} status={d.status} type={d.type} />
                    </Grid>
                })}
            </Grid>
        </div>
    )
}

export default DeviceGrid