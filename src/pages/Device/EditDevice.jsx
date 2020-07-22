import React from 'react'
import { useParams } from 'react-router-dom';
import SaveButton from '../../components/Button/SaveButton';
import { DeviceEdit } from '../../components/Device';
import { Typography } from '@material-ui/core';

const EditDevice = () => {
    let { id } = useParams();
    return <>
        <Typography variant="h4">Edit - {id}</Typography>
        <br />
        <SaveButton back={`/device/${id}`} />
        <br />
        <DeviceEdit />
    </>
}

export default EditDevice