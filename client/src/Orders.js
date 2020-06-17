import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';

// Generate Order Data
function createData(eventName, eventDescription) {
  return { eventName, eventDescription };
}



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [Email, sete] = React.useState(props.email);
  const [Name, setn] = React.useState(props.name);
  const [rows, setRows] = React.useState([]);
  const [eventName, setName] = React.useState(``);
  const [eventDescription, setDescription] = React.useState(``);
  const [s, sets] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const Submit = (event) => {
    sets(s + 1);
    event.preventDefault();
    const payload = {
      Email: props.email,
      Name: props.name,
      eventName: eventName,
      eventDescription: eventDescription,
      volunteermail: age
    };
    axios({
      url: '/addevent',
      method: 'POST',
      data: payload
    }).then((re) => {
      console.log(re.data);
      setName(``);
      setDescription(``);

    });
  }


  useEffect(() => {
    const payload = {

      Email: Email,
      Name: Name

    };
    axios({
      url: '/getevents',
      method: 'POST',
      data: payload
    }).then((response) => {
      console.log(response.data);
      setRows(response.data);

    });
    axios({
      url: '/getvolunteers',
      method: 'GET'
    }).then((response) => {
      console.log(response.data);
      setItems(response.data);
    })

  }, [s]);

  return (<div>
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

          <Grid item xs={12} >
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">Select a volunteer</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={age}
                onChange={handleChange}
              >
                <MenuItem value="">

                </MenuItem>
                {items.map((item) => {
                  return <MenuItem value={item.Email}>{item.Email}</MenuItem>
                })}


              </Select>
            </FormControl>
          </Grid>

          <Button
            onClick={Submit}
            style={{ marginLeft: "30px" }} variant="contained" color="primary">
            Add
</Button>
        </Grid>
      </form>
    </div>
    <div>
      <Title>Event list</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>eventName</TableCell>
            <TableCell>eventDescription</TableCell>
            <TableCell>volunteermail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((ro, index) => (
            <TableRow key={index}>
              <TableCell>{ro.eventName}</TableCell>
              <TableCell>{ro.eventDescription}</TableCell>
              <TableCell>{ro.volunteermail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Events
        </Link>
      </div>
    </div>
  </div>
  );
}
