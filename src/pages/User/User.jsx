import React from 'react'
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import CreateButton from '../../components/Button/CreateButton';

const User = () => {
    return <>
        <Typography variant="h4">User</Typography>
        <br />
        <CreateButton/>
    </>
}

export default User