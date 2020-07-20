import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { RoomView } from '../../components/Room';
import EditButton from '../../components/Button/EditButton';

const Room = () => {
    let { id } = useParams()
    return <>
    <EditButton edit={`/room/edit/${id}`} back={`/rooms`}/>
    <br/>
    <RoomView/>
    </>
}

export default Room