import React, { useState } from 'react'
import { TextField, Button, Grid, Typography } from '@material-ui/core'
import { gql, useMutation } from '@apollo/client'

const Login = props => {

    const [login] = useMutation(gql`
        mutation($input: LoginInput!){
            login(input:$input){
                authToken{
                    accessToken
                }
            }
        }
    `)

    const handleLogin = async event => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: {
                    input: {
                        username: username,
                        password: password
                    }
                }
            })
            localStorage.setItem("token", data.login.authToken.accessToken)
            window.location.reload()
        } catch (e) {
            alert(e)
        }

    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form onSubmit={handleLogin}>
            {`${props.error}`}
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
                    required
                    style={{ margin: 10 }}
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <TextField
                    id="password-input"
                    label="Password"
                    type="password"
                    required
                    autoComplete="current-password"
                    style={{ margin: 10 }}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button type="submit" style={{ margin: 10 }} variant="contained">Login</Button>

            </Grid>
        </form>
    )
}

export default Login