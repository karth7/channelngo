import React, { useEffect } from 'react';
//import DoneIcon from '@material-ui/icons/Done';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import axios from 'axios';


export default function Seticonvol2(props) {
    const [click, setc] = React.useState(props.value.sbvolunteer);
    if (click === true) {
        return (<CheckCircleRoundedIcon />)
    }
    else {
        return (<IconButton color="primary" onClick={() => {
            if (props.value.cbvolunteer === true) {
                setc(true);
                const payload = {
                    email: props.value.donormail,
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
                    url: '/volupdate2',
                    method: 'POST',
                    data: payload
                });
            }

        }} >

            <ArrowForwardIcon />

        </IconButton>)
    }


}