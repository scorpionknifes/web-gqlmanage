import React from 'react'
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import CreateButton from '../../components/Button/CreateButton';

const AddDevice = () => {
    return <>
        <Typography variant="h4">Add Device</Typography>
        <br />
        <CreateButton/>
    </>
}

export default AddDevice