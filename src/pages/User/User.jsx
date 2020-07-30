import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import EditButton from '../../components/Button/EditButton'
import Spinner from '../../components/Spinner/Spinner'
import UserFragment from '../../fragments/UserFragment'
import { useQuery, gql } from '@apollo/client'
import { UserView } from '../../components/User'

const User = () => {

    return <>
        <Typography variant="h4">DISABLED</Typography>
    </>
}

export default User