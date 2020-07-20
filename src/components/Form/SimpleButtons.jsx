import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import { IconButton } from '@material-ui/core';

const SaveButton = (props) => {
    return (
        <IconButton onClick={props.onClick} edge="end" aria-label="delete">
            <SaveIcon />
        </IconButton>
    )
}

export {SaveButton}