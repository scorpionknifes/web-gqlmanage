import React from 'react'
import { useParams } from 'react-router-dom';
import RoomEdit from '../../components/Device/DeviceEdit';
import { Typography } from '@material-ui/core';
import SaveButton from '../../components/Button/SaveButton';

const EditRoom = () => {
    let { id } = useParams();
    return <>
        <Typography variant="h4">Room {id}</Typography>
        <br />
        <SaveButton back={`/device/${id}`} />
        <br />
        <RoomEdit/>
    </>
}

export default EditRoom