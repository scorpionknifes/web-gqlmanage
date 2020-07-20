import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card,  CardContent, Box, CardActionArea, Typography, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    card: {
        width: "100%",
        margin: "auto",
    },
    media: {
        height: 140,
    },
});

const RoomCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Room {props.roomNumber}
                    </Typography>
                    <Box component="div" height="150px" visibility="auto">
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.memo ? props.memo:"Empty"}
                    </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button component={Link} to={`/room/${props.id}`} size="small" color="primary">View</Button>
                <Button component={Link} to={`/room/edit/${props.id}`} size="small" color="primary">Edit</Button>
            </CardActions>
        </Card>
    );
};
export default RoomCard;
