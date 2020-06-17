import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Modifyprofile(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        const payload = {
            email: props.mail,
            phone: phone,
            password: password
        };

        axios({
            url: '/modifyprofile',
            method: 'POST',
            data: payload
        });

        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const [phone, setPhone] = React.useState(0);
    const [password, setPassword] = React.useState('');

    return (<ExpansionPanel>
        <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography >Change profile</Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: "block" }}>
            <TextField id="standard-basic" type="tel" validate="true" label="phone" onChange={(event) => { setPhone(event.target.value) }} />
            <TextField id="password" label="password" validate="true" onChange={(event) => { setPassword(event.target.value) }} />
            <Button variant="outlined" onClick={handleClick}>
                confirm
</Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Profile is updated successfully
</Alert>
            </Snackbar>
            <Alert severity="success"></Alert>
        </ExpansionPanelDetails>
    </ExpansionPanel>)
}