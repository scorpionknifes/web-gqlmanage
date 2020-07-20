import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card,  CardContent, CardMedia, CardActionArea, Typography, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
                        {props.name}
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                        {props.model}
                    </Typography>
                    <br/>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.memo}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button component={Link} to={`/device/${props.id}`} size="small" color="primary">View</Button>
                <Button component={Link} to={`/device/edit/${props.id}`} size="small" color="primary">Edit</Button>
            </CardActions>
        </Card>
    );
};
export default DeviceCard;
