import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import EditButton from '../../components/Button/EditButton'
import Spinner from '../../components/Spinner/Spinner'
import UserFragment from '../../fragments/UserFragment'
import { useQuery, gql } from '@apollo/client'
import { UserView } from '../../components/User'

const User = () => {
    let { id } = useParams()
    const [user, setUser] = useState()

    const { loading, error, data } = useQuery(gql`
        query User($id: ID!) {
            user(id: $id) {
                ...UserFragment
            }
        }
        ${UserFragment}
    `,{
        variables: { id: id }
    })
    
    useEffect(()=>{
        if (!error && !loading && data) {
            setUser(data.user)
        }
    },[data,loading,error])

    return loading ? <Spinner/>:<>
        <Typography variant="h4">User</Typography>
        <br />
        <EditButton edit={`/user/edit/${id}`} back={`/users`} />
        <br />
        <UserView user={user}/>
    </>
}

export default User