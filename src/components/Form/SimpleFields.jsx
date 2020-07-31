import React from 'react'
import { TextField, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'

const SimpleSelectionField = (props) => {
    return (
        <div style={{ margin: 8 }}>
            <InputLabel>{props.name}</InputLabel>
            <Select
                value={props.value}
                onChange={props.onChange}
                fullWidth
                margin="normal"
            >
                {
                    props.selections?.map(item => {
                        return <MenuItem key={item.value}  value={item.value}>item.name</MenuItem>
                    })
                }
            </Select>
            <FormHelperText>0 = enabled, 1 = removed, 2 = replaced</FormHelperText>
        </div>
    )
}

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
            margin="normal"
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

export { SimpleDateField, SimpleSelectionField, SimpleTextField }