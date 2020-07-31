import React from 'react'
import { Typography } from '@material-ui/core'
import { useQuery, gql } from '@apollo/client'
import UserFragment from '../../fragments/UserFragment'
import { UserTable, UserInfo } from '../../components/User'
import Spinner from '../../components/Spinner/Spinner'
import Login from '../Login/Login'

const Users = () => {
    const { loading, error, data } = useQuery(gql`
        query Users {
            users {
                ...UserFragment
            }
        }
        ${UserFragment}
    `)

    if (loading){
        return <Spinner />
    }

    if (error){
        return <Login error={error}/>
    }

    return <>
        <Typography variant="h4">Info</Typography>
        <br />
        <UserInfo user={data?.users?data?.users[0]:null}/>
        <br />
        <Typography variant="h4">Users</Typography>
        <br />
        <UserTable users={data?.users}/>
    </>
}

export default Users