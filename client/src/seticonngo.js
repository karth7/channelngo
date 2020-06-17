import React, { useEffect } from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'axios';


export default function Seticonngo(props) {
    const [click, setc] = React.useState(props.value.cbngo);
    if (click === true) {
        return (<CheckCircleRoundedIcon />)
    }
    else {
        return (<IconButton color="primary" onClick={() => {
            if (props.value.sbvolunteer === true) {
                setc(true);
                const payload = {
                    email: props.mail,
                    ngoname: props.value.ngoname,
                    eventname: props.value.eventname,
                    ngomail: props.value.ngomail,
                    volunteermail: props.value.volunteermail,
                    rice: props.value.rice,
                    clothes: props.value.clothes,
                    blankets: props.value.blankets,
                    sbdonor: props.value.sbdonor,
                    cbvolunteer: props.value.cbvolunteer,
                    sbvolunteer: props.value.sbvolunteer,
                    cbngo: props.value.cbngo,
                }

                axios({
                    url: '/ngoupdate',
                    method: 'POST',
                    data: payload
                });
            }

        }} >

            <ArrowForwardIcon />

        </IconButton>)
    }


}