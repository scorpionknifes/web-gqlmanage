import React from 'react'
import { useParams } from 'react-router-dom';
import SaveButton from '../../components/Button/SaveButton';
import { DeviceEdit } from '../../components/Device';

const EditDevice = () => {
    let { id } = useParams();
    return <>
    <SaveButton back={`/device/${id}`}/>
    <br/>
    <DeviceEdit/>
    </>
}

export default EditDevice