import React from 'react'
import { TextField, Button, Grid } from '@material-ui/core'

export default () => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <TextField
                id="username-input"
                label="Username"
                type="text"
                style={{margin: 10}}
            />
            <TextField
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{margin: 10}}
            />
            <Button style={{margin: 10}} variant="contained">Login</Button>
        </Grid>
    )
}