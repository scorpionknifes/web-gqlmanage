import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';

const SaveButton = (props) => {
    return (
        <IconButton onClick={props.onClick} edge="end" aria-label="delete">
            <SaveIcon />
        </IconButton>
    )
}

export {SaveButton}