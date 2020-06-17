import React from 'react';
//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
import { Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from './logo.js';
import { Link as l, Redirect } from 'react-router-dom';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
//import Button from '@material-ui/core/Button';
import axios from 'axios';
//import Donorlanding from './donorlanding';
import { useHistory } from "react-router-dom";
import { login } from './utils/index.js';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        // position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();
    const [h, setH] = React.useState("/");

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
        event.preventDefault();
        const payload = {

            Email: email,
            password: password,
            role: age,
        };
        axios({
            url: '/signin',
            method: 'POST',
            data: payload
        }).then((re) => {
            // console.log(re.data[0].firstname);

            if (re.data.length === 1) {
                switch (age) {
                    case "Donor":
                        login(email, re.data[0].firstname);
                        history.push({
                            pathname: "/donorlanding",
                            email: email,
                            name: re.data[0].firstname,
                        });
                        //setH("/Volunteerlanding");
                        break;
                    case "NGO":
                        login(email, re.data[0].firstname);
                        history.push({
                            pathname: "/ngolanding",

                            email: email,
                            name: re.data[0].firstname,

                        });
                        // setH("/ngolanding");
                        break;
                    case "Volunteer":
                        login(email, re.data[0].firstname);
                        history.push({
                            pathname: "/volunteerlanding",

                            email: email,
                            name: re.data[0].firstname,

                        });
                        // setH("/ngolanding");
                        break;
                }



            }
        });


    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Logo />
                <Typography component="h1" variant="h5">
                    Sign in
          </Typography>
                <form className={classes.form} validate='true'>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={(event) => { setEmail(event.target.value); }}
                                autoFocus
                            /></Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(event) => { setPassword(event.target.value); }}
                                autoComplete="current-password"
                            /></Grid>
                        <Grid item xs={12} >
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-controlled-open-select-label">Role</InputLabel>
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
                                    <MenuItem value={"Donor"}>Donor</MenuItem>
                                    <MenuItem value={"Volunteer"}>Volunteer</MenuItem>
                                    <MenuItem value={"NGO"}>NGO</MenuItem>
                                    <MenuItem value={"Admin"}>Admin</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                /* type="submit"*/
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={Submit}
                            >
                                Sign In
            </Button></Grid>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" to="/SignUp" component={l}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}
