import React, { useState } from 'react'
import { TextField, Button, Grid, Typography } from '@material-ui/core'

export default () => {
    const handleLogin= () => {

    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Typography variant="h6">Login to {process.env.REACT_APP_HOTEL}</Typography>
            <TextField
                id="username-input"
                label="Username"
                type="text"
                style={{margin: 10}}
                value={username}
                onChange={e=>setUsername(e.target.value)}
            />
            <TextField
                id="password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                style={{margin: 10}}
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <Button onClick={handleLogin} style={{margin: 10}} variant="contained">Login</Button>
        </Grid>
    )
}