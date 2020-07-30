import React from 'react'
import { InputLabel, Select, MenuItem } from '@material-ui/core'
import { status } from '../Device/DeviceVar'

const StatusSelect = ({ value, set }) => {
    return <div style={{ margin: 8 }}>
        <InputLabel style={{fontSize: 12}}>Status</InputLabel>
        <Select
            value={value}
            onChange={e => set(e.target.value)}
        >
            {status.map((item, index) =>
                <MenuItem key={index} value={index}>{item}</MenuItem>
            )}

        </Select>
    </div>
}

export default StatusSelect