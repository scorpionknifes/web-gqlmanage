import React from 'react'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import RouterIcon from '@material-ui/icons/Router';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

export default () => {

    const top = [
        {
            name: "Rooms",
            icon: <MeetingRoomIcon/>
        },
        {
            name: "Devices",
            icon: <RouterIcon/>

        }
    ]

    const bot = [
        {
            name: "Add Room",
            icon: <MeetingRoomIcon/>
        },
        {
            name: "Add Device",
            icon: <RouterIcon/>

        }
    ]
    return (
        <div style={{ width: 240 }}>
            <div />
            <Divider />
            <List>
                {top.map((item, i) => (
                    <ListItem button key={i}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {bot.map((item, i) => (
                    <ListItem button key={i}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </div>)
}
    

    

