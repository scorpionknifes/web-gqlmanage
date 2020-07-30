import React, { useState, Fragment } from 'react'
import { Table, TableBody, TableCell, IconButton, Collapse, Box, Typography, TableHead, TableRow } from '@material-ui/core'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const EmailRow = ({ email }) => {
    const [open, setOpen] = useState(false)

    return <Fragment>
        <TableRow hover role="checkbox" tabIndex={-1} key={email.id}>
            <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
            </TableCell>
            <TableCell>{email.from}</TableCell>
            <TableCell>{email.to}</TableCell>
            <TableCell>{email.createdDate}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Box style={{maxWidth: 600}} margin={1}>
                        <div dangerouslySetInnerHTML={{__html: email.data}} />
                    </Box>
                </Collapse>
            </TableCell>
        </TableRow>
    </Fragment>
}

export default EmailRow