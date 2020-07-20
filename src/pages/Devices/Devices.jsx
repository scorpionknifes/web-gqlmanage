import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import DeviceCard from '../../components/Device/DeviceCard'

const Devices = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item sm={6} md={4} lg={3} container>
                    <DeviceCard/>
                </Grid>
                <Grid item sm={6} md={4} lg={3} container>
                    <DeviceCard/>
                </Grid>
                <Grid item sm={6} md={4} lg={3} container>
                    <DeviceCard/>
                </Grid>
                <Grid item sm={6} md={4} lg={3} container>
                    <DeviceCard/>
                </Grid>
                <Grid item sm={6} md={4} lg={3} container>
                    <DeviceCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Devices