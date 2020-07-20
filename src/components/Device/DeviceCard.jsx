import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card,  CardContent, CardMedia, CardActionArea, Typography, CardActions, Button } from "@material-ui/core";

const useStyles = makeStyles({
    card: {
        width: "100%",
        margin: "auto",
    },
    media: {
        height: 50,
    },
});

const DeviceCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Device Name
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                        PAN04
                    </Typography>
                    <br/>
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
export default DeviceCard;
