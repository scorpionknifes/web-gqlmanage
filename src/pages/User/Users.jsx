import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import CreateButton from '../../components/Button/CreateButton';
import { useQuery, gql } from '@apollo/client';
import UserFragment from '../../fragments/UserFragment';
import { UserTable } from '../../components/User';

const Users = () => {

    const [users, setUsers] = useState()

    const { loading, error, data } = useQuery(gql`
        query Users {
            users {
                ...UserFragment
            }
        }
        ${UserFragment}
    `)
    
    useEffect(()=>{
        if (!error && !loading && data) {
            console.log(data.users)
            setUsers(data.users)
        }
    },[data,loading,error])

    return <>
        <Typography variant="h4">Users</Typography>
        <br />
        <UserTable users={users}/>
    </>
}

export default Users