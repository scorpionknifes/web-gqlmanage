import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, CardActionArea, Typography, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { type, status } from './DeviceVar'

const useStyles = makeStyles({
    card: {
        width: "100%",
        height: "100%",
        margin: "auto",
    },
    media: {
        height: "50px",
        backgroundSize: "contain"
    },
    cardbody: {
        height: "calc( 100% - 46px )"
    },
    cardcontent: {
        height: "calc( 100% - 50px )"
    }
});

const DeviceCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea component={Link} to={`/device/${props.id}`} className={classes.cardbody}>
                <div style={{ height: "50px", margin: "10px" }}>
                    <CardMedia
                        className={classes.media}
                        image={type[props.type]}
                        title="Contemplative Reptile"
                    />
                </div>

                <CardContent className={classes.cardcontent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body3" color="textSecondary" component="p">
                        {props.model}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.memo}
                    </Typography>
                    <br/>
                    {status[props.status]}
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
