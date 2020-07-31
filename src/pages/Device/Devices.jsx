import React from 'react'
import { Typography } from '@material-ui/core'
import DeviceGrid from '../../components/Device/DeviceGrid'
import DeviceFragment from '../../fragments/DeviceFragment'
import Spinner from '../../components/Spinner/Spinner'
import { useQuery, gql } from '@apollo/client'

const Devices = () => {
    const { loading, error, data } = useQuery(gql`
        query Devices {
            devices {
                ...DeviceFragment
            }
        }
        ${DeviceFragment}
    `)

    if (loading){
        return <Spinner />
    }

    if (error){
        return `Error! ${error}`
    }

    return <>
        <Typography variant="h4">All Devices</Typography>
        <br />
        <DeviceGrid devices={data?.devices} />
    </>
}

export default Devices