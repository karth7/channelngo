
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
//import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
//import NotificationsIcon from '@material-ui/icons/Notifications';
//import { mainListItems, secondaryListItems } from './listitems';
//import Chart from './Chart';
//import Deposits from './Deposits';
import Orders from './Orders';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link as l } from 'react-router-dom';
//import Addevent from './addevent.js'
import { Redirect } from "react-router-dom";
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Seticon from './seticon';
import Seticonngo from './seticonngo';
import { logout, isLogin } from './utils';
import Modifyprofile from './modifyprofile';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}




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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root2: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    table: {
        minWidth: 650,
    },
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));


export default function NgoLanding(props) {
    const classes = useStyles();
    const [email, sete] = React.useState(localStorage.mail);
    const [name, setn] = React.useState(localStorage.name);
    console.log(email);
    console.log(name);
    const [value, setValue] = React.useState(0);
    const [items, setItems] = React.useState([]);
    const [islogin, setLogin] = React.useState(isLogin());

    const handleChange = (event, newValue) => {
        const payload = {
            email: email,
            name: name
        }

        axios({
            url: '/ngodonations',
            method: 'POST',
            data: payload
        }).then((response) => {
            console.log(response.data);
            setItems(response.data);

        });
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const handleLogout = () => {
        logout();

        setLogin(false);

    }

    return (
        <div>
            <div className={classes.root} >
                <CssBaseline />
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.root2} style={{ marginRight: "10px" }}>
                            <AppBar position="static">
                                <Tabs
                                    variant="fullWidth"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="nav tabs example"
                                >
                                    <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
                                    <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />

                                </Tabs>
                            </AppBar>

                        </div>

                        <Typography style={{ color: "white" }} >
                            Signout
                    </Typography >
                        {islogin && email ?
                            <IconButton onClick={() => handleLogout()} >
                                <Link to="/" component={l}>
                                    <ExitToAppIcon style={{ color: "white" }} />
                                </Link>
                            </IconButton>
                            : <Redirect to="/" />
                        }

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <Modifyprofile mail={email} />
                    <Divider />

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TabPanel value={value} index={0}>
                                    <Typography variant="h5" style={{ display: "flex", justifyContent: "flex-start" }}>
                                        Add a new event {props.location.name}
                                    </Typography>

                                    <Orders email={email} name={name} />
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>

                                                    <TableCell>donorname</TableCell>
                                                    <TableCell align="left">donormail</TableCell>
                                                    <TableCell align="left">volunteermail</TableCell>
                                                    <TableCell align="left">eventname</TableCell>
                                                    <TableCell align="left">rice</TableCell>
                                                    <TableCell align="left">clothes</TableCell>
                                                    <TableCell align="left">blankets</TableCell>
                                                    <TableCell align="left">sbdonor</TableCell>
                                                    <TableCell align="left">cbvolunteer</TableCell>
                                                    <TableCell align="left">sbvolunteer</TableCell>
                                                    <TableCell align="left">cbngo</TableCell>

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {items.map(function (row, index) {
                                                    return <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {row.donorname}
                                                        </TableCell>
                                                        <TableCell align="left">{row.donormail}</TableCell>
                                                        <TableCell align="left">{row.volunteermail}</TableCell>
                                                        <TableCell align="left">{row.eventname}</TableCell>
                                                        <TableCell align="left">{row.rice}</TableCell>
                                                        <TableCell align="left">{row.clothes}</TableCell>
                                                        <TableCell align="left">{row.blankets}</TableCell>
                                                        <TableCell align="left">{<Seticon value={row.sbdonor} />}</TableCell>
                                                        <TableCell align="left">{<Seticon value={row.cbvolunteer} />}</TableCell>
                                                        <TableCell align="left">{<Seticon value={row.sbvolunteer} />}</TableCell>
                                                        <TableCell align="left">{<Seticonngo value={row} />}</TableCell>
                                                    </TableRow>
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TabPanel>

                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>

                </main>
            </div>

        </div>
    );
}