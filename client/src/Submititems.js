import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Countitems from './countitems';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    m: {
        marginRight: theme.spacing(4)
    },

}));

export default function Submititems(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
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
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const [severity, s] = React.useState('');
    const [msg, m] = React.useState('');

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
                if (ricecount || shirtcount || blanketcount) {
                    s("success");
                    m("Donation accepted")
                    setOpen(true);
                    console.log(new Date().toLocaleString());
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
                        cbngo: false,
                        donationtime: new Date(),
                        donationday: (new Date()).getDate()
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
                }
                else {
                    s("error");
                    m("Donation cannot be accepted");
                    setOpen(true);
                }
            }} variant="contained" color="primary">
                Donate to {props.name}
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity}>
                    {msg}
                </Alert>
            </Snackbar>
        </div>
    );
}