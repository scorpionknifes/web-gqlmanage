import React from 'react'
import { useParams } from 'react-router-dom'
import EditButton from '../../components/Button/EditButton'
import { DeviceView } from '../../components/Device'
import { Typography } from '@material-ui/core'
import DeviceFragment from '../../fragments/DeviceFragment'
import Spinner from '../../components/Spinner/Spinner'
import { useQuery, gql } from '@apollo/client'


const Device = () => {
    let { id } = useParams()

    const { loading, error, data } = useQuery(gql`
        query Device($id: ID!) {
            device(id: $id) {
                ...DeviceFragment
            }
        }
        ${DeviceFragment}
    `,{
        variables: { id: id }
    })

    if (loading) {
        return <Spinner/>
    }

    if (error) {
        return `Error! ${error}`
    }
    
    return <>
        <Typography variant="h4">Device - {data?.device?.name}</Typography>
        <br />
        <EditButton edit={`/device/edit/${id}`} back={`/room/${data?.device?.room?.id}`} />
        <br />
        <DeviceView device={data?.device}/>
    </>
}
export default Device