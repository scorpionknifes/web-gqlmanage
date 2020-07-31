import React from 'react'
import { TextField } from '@material-ui/core'

const SimpleTextField = (props) => {
    return (
        <TextField
            label={props.name}
            style={{ margin: 8 }}
            placeholder={props.name}
            required={props.required}
            value={props.value}
            onChange={props.onChange}
            helperText={props.helper}
            disabled={props.disabled}
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            multiline
        />
    )
}

const SimpleDateField = (props) => {
    return (
        <TextField
            label={props.name}
            type="datetime-local"
            value={props.value}
            style={{ margin: 8 }}
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            disabled={props.disabled}
        />
    )
}

export { SimpleDateField, SimpleTextField }