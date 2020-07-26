import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import RoomCard from '../../components/Room/RoomCard'
import AddButton from '../../components/Button/AddButton'
import { useQuery, gql } from '@apollo/client'
import Spinner from '../../components/Spinner/Spinner'
import RoomFragment from '../../fragments/RoomFragment'

const Rooms = () => {

    const [rooms, setRooms] = useState()

    const { loading, error, data } = useQuery(gql`
        query Rooms {
            rooms {
                ...RoomFragment
            }
        }
        ${RoomFragment}
    `)

    useEffect(() => {
        if (!error && !loading && data) {
            setRooms(data.rooms)
        }
    }, [data, loading, error])

    return loading ? <Spinner/>:<>
        <Typography variant="h4">Rooms</Typography>
        <br />
        <AddButton />
        <br />
        <div>
            <Grid container spacing={4}>
                {rooms?.map(room => {
                    return <Grid item sm={6} md={4} lg={3} container>
                        <RoomCard id={room.id} roomNumber={room.roomNumber} memo={room.memo} />
                    </Grid>
                })}
            </Grid>
        </div>
    </>
}

export default Rooms