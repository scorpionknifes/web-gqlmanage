import React, { useEffect, useState } from 'react'
import { Typography } from '@material-ui/core'
import DeviceGrid from '../../components/Device/DeviceGrid'
import DeviceFragment from '../../fragments/DeviceFragment'
import Spinner from '../../components/Spinner/Spinner'
import { useQuery, gql } from '@apollo/client'

const Devices = () => {

    const [devices, setDevices] = useState()

    const { loading, error, data } = useQuery(gql`
        query Devices {
            devices {
                ...DeviceFragment
            }
        }
        ${DeviceFragment}
    `)

    useEffect(() => {
        if (!error && !loading && data) {
            setDevices(data.devices)
        }
    }, [data, loading, error])

    return loading ? <Spinner /> :
        <>
            <Typography variant="h4">All Devices</Typography>
            <br />
            <DeviceGrid devices={devices} />
        </>
}

export default Devices