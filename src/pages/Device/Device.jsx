import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import EditButton from '../../components/Button/EditButton'
import { DeviceView } from '../../components/Device'
import { Typography } from '@material-ui/core'
import DeviceFragment from '../../fragments/DeviceFragment'
import Spinner from '../../components/Spinner/Spinner'
import { useQuery, gql } from '@apollo/client'


const Device = () => {
    let { id } = useParams()
    const [device, setDevice] = useState()

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

    useEffect(()=>{
        if (!error && !loading && data) {
            setDevice(data.device)
        }
    },[data,loading,error])
    return loading ? <Spinner/>:<>
        <Typography variant="h4">Device - {device?.name}</Typography>
        <br />
        <EditButton edit={`/device/edit/${id}`} back={`/room/${device?.room}`} />
        <br />
        <DeviceView device={device}/>
    </>
}
export default Device