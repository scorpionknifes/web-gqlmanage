import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import RoomCard from '../../components/Room/RoomCard'
import AddButton from '../../components/Button/AddButton'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../../components/Spinner/Spinner'
import RoomFragment from '../../fragments/RoomFragment'
import Login from '../Login/Login'

const Rooms = () => {
    const { loading, error, data } = useQuery(gql`
        query Rooms {
            rooms {
                ...RoomFragment
            }
        }
        ${RoomFragment}
    `)

    if (loading){
        return <Spinner/>
    }

    if (error){
        return <Login error={error}/>
    }

    return <>
        <Typography variant="h4">Rooms</Typography>
        <br />
        <AddButton add={'/room/add'}/>
        <br />
        <div>
            <Grid container spacing={4}>
                {data?.rooms?.map(room => {
                    return <Grid key={room.id} item sm={6} md={4} lg={3} container>
                        <RoomCard id={room.id} roomNumber={room.roomNumber} memo={room.memo} />
                    </Grid>
                })}
            </Grid>
        </div>
    </>
}

export default Rooms