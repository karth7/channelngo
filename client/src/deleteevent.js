import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

export default function Deleteevent(props) {
    return (
        <IconButton color="primary" onClick={() => {
            const payload = {
                mail: props.mail,
                eventName: props.value.eventName,
                eventDescription: props.value.eventDescription,
            }
            axios({
                url: '/deleteevent',
                method: 'POST',
                data: payload
            });
            props.callbackfromparent(1);
        }}>
            <DeleteIcon />
        </IconButton>
    )

};