import React from 'react'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

export default () => {

    const top = [
        {
            name: "Rooms"
        },
    ]

    return (
        <div style={{ width: 240 }}>
            <div />
            <Divider />
            <List>
                {['Rooms', 'Devices', 'Status', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>)
}
    

    

