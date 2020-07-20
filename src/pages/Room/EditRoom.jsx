import React from 'react'
import { useParams } from 'react-router-dom';
import RoomEdit from '../../components/Device/DeviceEdit';

const EditRoom = () => {
    let { id } = useParams();
    return <>
        <RoomEdit/>
    </>
}

export default EditRoom