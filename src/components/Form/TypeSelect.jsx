import React from 'react'
import { InputLabel, Select, MenuItem } from '@material-ui/core'
import { typestring } from '../Device/DeviceVar'

const TypeSelect = ({ value, set }) => {
    return <div style={{ margin: 8 }}>
        <InputLabel style={{fontSize: 12}}>Type</InputLabel>
        <Select
            value={value}
            onChange={e => set(e.target.value)}
        >
            {typestring.map((item, index)=>
                <MenuItem key={index} value={index}>{item}</MenuItem>
            )}
        </Select>
    </div>
}

export default TypeSelect