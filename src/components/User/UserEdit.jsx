import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { SimpleTextField } from '../Form/SimpleFields'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '700px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

const UserEdit = props => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={props.id} />
                <SimpleTextField name="Name" helper="fully qualified name" required onChange={e => props.setName(e.target.value)} value={props.name} />
            </div>
        </div>
    );
}

export default UserEdit
