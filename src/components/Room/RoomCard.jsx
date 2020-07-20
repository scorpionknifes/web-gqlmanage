import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card,  CardContent, CardActionArea, Typography, CardActions, Button } from "@material-ui/core";

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
                        Room 1020
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Memo
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
            </CardActions>
        </Card>
    );
};
export default RoomCard;
