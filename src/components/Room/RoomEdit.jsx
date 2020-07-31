import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SimpleSelectionField, SimpleTextField } from '../Form/SimpleFields'

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

const RoomEdit = props => {
    const classes = useStyles()



    return (
        <div className={classes.root}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={props?.id} />
                <SimpleTextField name="Room Number" helper="Room Number" disabled value={props.room?.roomNumber} />
                <SimpleTextField name="Memo" helper="memo (optional)" onChange={e => props.setMemo(e.target.value)} value={props.memo} />
                <SimpleTextField name="Created Date" helper="" disabled value={props.room?.createdDate} />
                <SimpleSelectionField />
            </div>
        </div>
    );
}

export default RoomEdit
