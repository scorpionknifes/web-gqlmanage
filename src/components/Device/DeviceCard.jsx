import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, CardActionArea, Typography, CardActions, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { type, status } from './DeviceVar'

const useStyles = makeStyles({
    devicecard: {
        width: "100%",
        height: "100%",
        margin: "auto",
    },
    devicemedia: {
        height: "50px",
        backgroundSize: "contain"
    },
    devicecardbody: {
        height: "calc( 100% - 46px )"
    },
    devicecardcontent: {
        
    }
});

const DeviceCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.devicecard}>
            <CardActionArea component={Link} to={`/device/${props.id}`} className={classes.devicecardbody}>
                <CardMedia
                    className={classes.devicemedia}
                    image={type[props.type]}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.devicecardcontent}>
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
