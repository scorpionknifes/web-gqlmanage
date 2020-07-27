import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const AddButton = (props) => {
    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button component={Link} to={props.add} variant="contained" size="large" color="primary">Add</Button>
            </Grid>
        </Grid>
    )
}

export default AddButton