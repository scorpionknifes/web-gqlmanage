import React from 'react'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import RouterIcon from '@material-ui/icons/Router'
import {Link} from 'react-router-dom'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'

export default () => {

    const top = [
        {
            name: "Rooms",
            icon: <MeetingRoomIcon/>,
            location:"/rooms"
        },
        {
            name: "Devices",
            icon: <RouterIcon/>,
            location:"/devices"

        }
    ]

    const bot = [
        {
            name: "Add Room",
            icon: <MeetingRoomIcon/>,
            location:"/add/room"
        },
        {
            name: "Add Device",
            icon: <RouterIcon/>,
            location:"/add/device"

        }
    ]
    return (
        <div style={{ width: 240 }}>
            <div />
            <Divider />
            <List>
                {top.map((item, i) => (
                    <ListItem component={Link} to={item.location} button key={i}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {bot.map((item, i) => (
                    <ListItem component={Link} to={item.location} button key={i}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
        </div>)
}
    

    

