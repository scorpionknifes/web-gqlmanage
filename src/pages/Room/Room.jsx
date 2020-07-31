import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RoomView } from '../../components/Room'
import EditButton from '../../components/Button/EditButton'
import { Typography } from '@material-ui/core'
import AddButton from '../../components/Button/AddButton'
import DeviceGrid from '../../components/Device/DeviceGrid'
import DeviceFragment from '../../fragments/DeviceFragment'
import RoomFragment from '../../fragments/RoomFragment'
import Spinner from '../../components/Spinner/Spinner'
import { useQuery, gql } from '@apollo/client'


const Room = () => { 
    let { id } = useParams()
    const [room, setRoom] = useState()
    
    const { loading, error, data } = useQuery(gql`
        query Room($id: ID!) {
            room(id: $id) {
                ...RoomFragment
                devices{
                    ...DeviceFragment
                }
            }
        }
        ${RoomFragment}
        ${DeviceFragment}
    `,{
        variables: { id: id }
    })

    useEffect(()=>{
        if (!error && !loading && data) {
            console.log(data)
            setRoom(data.room)
        }
    },[data, error, loading])


    return loading ? <Spinner/>:<>
        <Typography variant="h4">Room {room?.roomNumber}</Typography>
        <br />
        <EditButton edit={`/room/edit/${id}`} back={`/rooms`} />
        <br />
        <RoomView room={room}/>
        <br />
        <Typography variant="h4">Devices</Typography>
        <br />
        <AddButton add={`/device/add/${id}`}/>
        <br />
        <DeviceGrid devices={room?.devices}/>
    </>
}

export default Room