import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RoomEdit from '../../components/Device/DeviceEdit'
import { Typography } from '@material-ui/core'
import SaveButton from '../../components/Button/SaveButton'
import Spinner from '../../components/Spinner/Spinner'
import RoomFragment from '../../fragments/RoomFragment'
import { useQuery, gql } from '@apollo/client'

const EditRoom = () => {
    let { id } = useParams();
    const [room, setRoom] = useState()
    
    const { loading, error, data } = useQuery(gql`
        query Room($id: ID!) {
            room(id: $id) {
                ...RoomFragment
            }
        }
        ${RoomFragment}
    `,{
        variables: { id: id }
    })

    useEffect(()=>{
        if (!error && !loading && data) {
            console.log(data)
            setRoom(data.room)
        }
    },[data,loading,error])

    return loading ? <Spinner /> : <>
        <Typography variant="h4">Room {room?.roomNumber}</Typography>
        <br />
        <SaveButton back={`/room/${id}`} />
        <br />
        <RoomEdit room={room}/>
    </>
}

export default EditRoom