import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export default function Addevent(props) {
    const [eventName, setName] = React.useState(``);
    const [eventDescription, setDescription] = React.useState(``);
    const Submit = (event) => {
        event.preventDefault();
        const payload = {
            Email: props.email,
            Name: props.name,
            eventName: eventName,
            eventDescription: eventDescription
        };
        axios({
            url: 'http://localhost:8080/addevent',
            method: 'POST',
            data: payload
        }).then((re) => {
            console.log(re.data);
            setName(``);
            setDescription(``);

        });
    }
    return (
        <div>
            <form validate="true">
                <Grid container spacing={3} justify="flex-start"
                    alignItems="flex-start" direction="column">
                    <Grid item xs={12}>
                        <TextField
                            value={eventName}
                            style={{ width: '50ch' }}
                            id="outlined-basic"
                            label="Event name"
                            variant="outlined"
                            onChange={(event) => { setName(event.target.value); }}
                        /></Grid>
                    <Grid item xs={12} >
                        <TextField
                            value={eventDescription}
                            id="outlined-multiline-basic"
                            label="Event Description"
                            multiline
                            rows={4}
                            variant="outlined"
                            style={{ width: '70ch' }}
                            onChange={(event) => { setDescription(event.target.value); }}
                        /></Grid>

                    <Button
                        onClick={Submit}
                        style={{ marginLeft: "30px" }} variant="contained" color="primary">
                        Add
  </Button>
                </Grid>
            </form>
        </div>
    );
};