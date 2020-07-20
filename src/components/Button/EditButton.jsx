import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

const EditButton = (props) => {

    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button component={Link} to={props.edit} variant="contained" size="large" color="primary">Edit</Button>
            </Grid>
            <Grid item>
                <Button component={Link} to={props.back} variant="outlined" size="large" color="primary">Back</Button>
            </Grid>
        </Grid>
    )

}

export default EditButton