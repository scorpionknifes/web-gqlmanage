import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core'
import RoomCard from '../../components/Room/RoomCard'
import AddButton from '../../components/Button/AddButton'
import { useQuery, gql } from '@apollo/client'
import RoomFragment from '../../fragments/RoomFragment'

const data = [
    {
        id: "mongoid",
        roomNumber: "1020",
        memo: "My Demo Memo"
    },
    {
        id: "mongoid",
        roomNumber: "1021",
        memo: "My Demo Memo"
    },
    {
        id: "mongoid",
        roomNumber: "105A",
        memo: ""
    },
    {
        id: "mongoid",
        roomNumber: "1063",
        memo: "My Demo Memo"
    },
    {
        id: "mongoid",
        roomNumber: "1024",
        memo: ""
    },
]

const Rooms = () => {

    const [rooms, setRooms] = useState()

    const roomsQuery = useQuery(gql`
        query Rooms {
            rooms {
                ...RoomFragment
            }
        }
        ${RoomFragment}
    `)

    useEffect(() => {
        const { loading, error, data } = roomsQuery
        if (!error && !loading && data) {
            setRooms(data)
        }
        console.log(error)
    }, [])

    return (
        <>
            <Typography variant="h4">Rooms</Typography>
            <br />
            <AddButton />
            <br />
            <div>
                <Grid container spacing={4}>
                    {rooms?.sort((a, b) => (a.roomNumber > b.roomNumber) - (a.roomNumber < b.roomNumber)).map(room => {
                        return <Grid item sm={6} md={4} lg={3} container>
                            <RoomCard id={room.id} roomNumber={room.roomNumber} memo={room.memo} />
                        </Grid>
                    })}
                </Grid>
            </div>
        </>
    )
}

export default Rooms