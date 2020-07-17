import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import Card from '../../components/Room/Card'
//import { useQuery } from '@apollo/client'
//import RoomsQuery from '../../graphql/RoomsQuery'

/*
const roomsQuery = useQuery(RoomsQuery, {
    variables: { input: "" }
})*/


/*
useEffect(() => {
    const { loading, error, data } = roomsQuery
    if (!error && !loading && data) {
        const { locations } = data
        console.log(locations)
        if (locations.length === 0) {
            console.log("no results")
            return
        }
    }
}, [])*/

const Rooms = () => {
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item sm={6} md={4} lg={3} container>
                    <Card />
                </Grid>
                <Grid item sm={6} md={4} lg={3} container>
                    <Card />
                </Grid>

                <Grid item sm={6} md={4} lg={3} container>
                    <Card />
                </Grid>

                <Grid item sm={6} md={4} lg={3} container>
                    <Card />
                </Grid>
            </Grid>
        </div>
    )
}

export default Rooms