import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SimpleTextField } from '../Form/SimpleFields'
import StatusSelect from '../Form/StatusSelect'
import TypeSelect from '../Form/TypeSelect'

const useStyles = makeStyles(() => ({
    deviceaddroot: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '700px',
    },
}));

const Add = props => {
    const classes = useStyles()

    return (
        <div className={classes.deviceaddroot}>
            <div>
                <SimpleTextField name="Name" helper="fully qualified name" required onChange={e => props.setName(e.target.value)} value={props.name} />
                <SimpleTextField name="Model" helper="model number" required onChange={e => props.setModel(e.target.value)} value={props.model} />
                <SimpleTextField name="MAC Address" helper="device mac address (optional)" required onChange={e => { formatMAC(e); props.setMacAddress(e.target.value) }} value={props.macAddress} />
                <SimpleTextField name="Memo" helper="memo (optional)" required onChange={e => props.setMemo(e.target.value)} value={props.memo} />
                <SimpleTextField name="Serial Number" helper="serial number" required onChange={e => props.setSerialNumber(e.target.value)} value={props.serialNumber} />
                <StatusSelect set={props.setStatus} value={props.status} />
                <TypeSelect set={props.setType} value={props.type} />
            </div>
        </div>
    );
}

function formatMAC(e) {
    var r = /([a-f0-9]{2})([a-f0-9]{2})/i,
        str = e.target.value.replace(/[^a-f0-9]/ig, "");

    while (r.test(str)) {
        str = str.replace(r, `$1:$2`);
    }

    e.target.value = str.slice(0, 17);
};

export default Add
