import React from 'react'
import { Button, Grid } from '@material-ui/core'

const VerifyButton = () => {

    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button onClick={()=>window.open(process.env.REACT_APP_BASENAME+'/emails')} variant="contained" size="large" color="primary">Verify Email</Button>
            </Grid>
        </Grid>
    )

}

export default VerifyButton