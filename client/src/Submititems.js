import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Countitems from './countitems';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    m: {
        marginRight: theme.spacing(4)
    },

}));

export default function Submititems(props) {
    const classes = useStyles();
    const [ricecount, setCount1] = React.useState(0);
    const myCallback1 = (dataFromChild) => {
        setCount1(Math.max(dataFromChild, 0))
    };
    const [shirtcount, setCount2] = React.useState(0);
    const myCallback2 = (dataFromChild) => {
        setCount2(Math.max(dataFromChild, 0))
    };
    const [blanketcount, setCount3] = React.useState(0);
    const myCallback3 = (dataFromChild) => {
        setCount3(Math.max(dataFromChild, 0))
    };
    const [d, setd] = React.useState(true);

    return (
        <div>
            <div style={{ display: "flex" }} >
                <Typography className={classes.m} variant="h6">
                    Rice in kgs : {ricecount}
                </Typography>
                <Countitems callbackFromParent={myCallback1} sc={ricecount} />
            </div>
            <div style={{ display: "flex" }} >
                <Typography className={classes.m} variant="h6">
                    Shirts : {shirtcount}
                </Typography>
                <Countitems callbackFromParent={myCallback2} sc={shirtcount} />
            </div>
            <div style={{ display: "flex" }} >
                <Typography className={classes.m} variant="h6">
                    Blankets : {blanketcount}
                </Typography>
                <Countitems callbackFromParent={myCallback3} sc={blanketcount} />
            </div>
            <Button onClick={() => {
                props.callbackFromParent(ricecount, shirtcount, blanketcount, d);
                const payload = {
                    donormail: props.donormail,
                    donorname: props.donorname,
                    ngomail: props.ngomail,
                    ngoname: props.ngoname,
                    eventname: props.eventname,
                    volunteermail: props.volunteermail,
                    rice: ricecount,
                    clothes: shirtcount,
                    blankets: blanketcount,
                    sbdonor: false,
                    cbvolunteer: false,
                    sbvolunteer: false,
                    cbngo: false
                }
                axios({
                    url: '/donordonate',
                    method: 'POST',
                    data: payload
                }).then((response) => {
                    console.log(response.data);


                });

                setCount1(0);
                setCount2(0);
                setCount3(0);
            }} variant="contained" color="primary">
                Donate to {props.name}
            </Button>
        </div>
    );
}