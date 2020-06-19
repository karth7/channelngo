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
//import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DeleteIcon from '@material-ui/icons/Delete';
import Deleteevent from './deleteevent';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
  const [severity, sev] = React.useState('');
  const [msg, m] = React.useState('');
  const [op, setOp] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOp(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const Submit = (event) => {

    if (eventName && eventDescription && !age) {
      sev("error");
      m("select a volunteer");
      setOp(true);
    }
    else if (eventName && !eventDescription && age) {
      sev("error");
      m("Please enter a event description");
      setOp(true);
    }
    else if (!eventName && eventDescription && age) {
      sev("error");
      m("Please enter a event name");
      setOp(true);
    }
    else if (!eventName && !eventDescription && age) {
      sev("error");
      m("Please enter  event name and description");
      setOp(true);
    }
    else if (eventName && !eventDescription && !age) {
      sev("error");
      m("Please enter a event description and select a volunteer");
      setOp(true);
    }
    else if (!eventName && eventDescription && !age) {
      sev("error");
      m("Please enter a event name and select a volunteer");
      setOp(true);
    }
    else if (!eventName && !eventDescription && !age) {
      sev("error");
      m("Please enter a event name,description and select a volunteer");
      setOp(true);
    }
    else {


      event.preventDefault();
      const payload = {
        Email: props.email,
        Name: props.name,
        eventName: eventName,
        eventDescription: eventDescription,
        volunteermail: age,
        adddate: new Date(),
        addday: (new Date()).getDate(),
        addmonth: (new Date()).getMonth(),
        remday: 32,
        flag: 0
      };
      axios({
        url: '/addevent',
        method: 'POST',
        data: payload
      }).then((re) => {
        console.log(re.data);
        setName(``);
        setDescription(``);
        setAge(``);

      });
      sets(s + 1);
      sev("success");
      m("event added successfully");
      setOp(true);

    }
  }


  useEffect(() => {

    const payload2 = {

      Email: Email,
      Name: Name, flag: 0

    };
    axios({
      url: '/getevents',
      method: 'POST',
      data: payload2
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


  const callback = ((a) => {
    if (a === 1) {
      sets(s + 1);
    }
  });

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
            Select a volunteer
          <Grid item xs={12} >
            <FormControl className={classes.formControl}>

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
                  <InputLabel id="demo-controlled-open-select-label">Select a volunteer</InputLabel>
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
          <Snackbar open={op} autoHideDuration={6000} onClose={handleClose2}>
            <Alert onClose={handleClose2} severity={severity}>
              {msg}
            </Alert>
          </Snackbar>
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
            <TableCell>delete the event</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((ro, index) => (
            <TableRow key={index}>
              <TableCell>{ro.eventName}</TableCell>
              <TableCell>{ro.eventDescription}</TableCell>
              <TableCell>{ro.volunteermail}</TableCell>
              <TableCell><Deleteevent value={ro} mail={Email} callbackfromparent={callback} /></TableCell>
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
