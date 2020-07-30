import React from 'react'
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import CreateButton from '../../components/Button/CreateButton';

const Users = () => {
    return <>
        <Typography variant="h4">Users</Typography>
        <br />
        <CreateButton/>
    </>
}

export default Users