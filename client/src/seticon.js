import React from 'react';
//import DoneIcon from '@material-ui/icons/Done';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';


export default function Seticon(props) {
    if (props.value) {
        return (<CheckCircleRoundedIcon />)
    }
    else {
        return (<CancelOutlinedIcon />)
    }
}