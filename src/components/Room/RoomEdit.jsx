import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SimpleTextField } from '../Form/SimpleFields'

const useStyles = makeStyles(() => ({
    roomeditroot: {
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '700px',
    },
}));

const RoomEdit = props => {
    const classes = useStyles()

    return (
        <div className={classes.roomeditroot}>
            <div>
                <SimpleTextField name="ID" helper="database ID" disabled value={props?.id} />
                <SimpleTextField name="Room Number" helper="Room Number" disabled value={props.room?.roomNumber} />
                <SimpleTextField name="Memo" helper="memo (optional)" onChange={e => props.setMemo(e.target.value)} value={props.memo} />
                <SimpleTextField name="Created Date" helper="" disabled value={props.room?.createdDate} />
            </div>
        </div>
    );
}

export default RoomEdit
