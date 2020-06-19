
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
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
//import Orders from './Orders';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link as l, Redirect } from 'react-router-dom';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
//import Countitems from './countitems'
import Submititems from './Submititems';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Seticon from './seticon.js';
import Seticondonor from './seticondonor';
import Seticonvol1 from './seticonvol1';
import Seticonvol2 from './seticonvol2';
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

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiExpansionPanelDetails);




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





export default function VolunteerLanding(props) {
    const classes = useStyles();
    const [de, setD] = React.useState(true);
    const [expanded, setExpanded] = React.useState('1');
    const [value, setValue] = React.useState(0);
    const [count1, setCount1] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const [count3, setCount3] = React.useState(0);
    const [mail, setmail] = React.useState(localStorage.mail);
    const [name, setname] = React.useState(localStorage.name);
    console.log({ mail }, { name });
    const [items, setItems2] = React.useState([]);
    const [items2, setItems3] = React.useState([]);
    const [islogin, setLogin] = React.useState(isLogin());
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const handleChange2 = (event, newValue) => {

        const payload = {
            email: mail,
            name: name
        }

        axios({
            url: '/donordonation',
            method: 'POST',
            data: payload
        }).then((response) => {
            console.log(response.data);
            setItems2(response.data);

        });

        const payload2 = {
            email: mail,
        }

        axios({
            url: '/volunteerdonation',
            method: 'POST',
            data: payload2
        }).then((response) => {
            console.log(response.data);
            setItems3(response.data);

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
    const [uitems, setItems] = React.useState([]);
    useEffect(() => {
        axios({
            url: '/donorevents',
            method: 'GET'
        }).then((response) => {
            console.log(response.data);
            setItems(response.data);

        });

    }, [de]);

    const myCallback = (a, b, c, d) => {
        setCount1(a);
        setCount2(b);
        setCount3(c);
        setD(!de);

    };

    const handleLogout = () => {
        logout();

        setLogin(false);

    }

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
                                    onChange={handleChange2}
                                    aria-label="nav tabs example"
                                >
                                    <LinkTab label="Events" href="/drafts" {...a11yProps(0)} />
                                    <LinkTab label="Donation history" href="/trash" {...a11yProps(1)} />
                                    <LinkTab label="Donations by donors" href="/trash" {...a11yProps(2)} />

                                </Tabs>
                            </AppBar>

                        </div>

                        <Typography style={{ color: "white" }} >
                            Signout
                    </Typography >
                        {islogin && mail ?
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
                    <Modifyprofile mail={mail} />
                    <Divider />

                </Drawer>
                <main className={classes.content}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TabPanel value={value} index={0}>
                                    <div>
                                        {uitems.map(function (item, index) {
                                            return <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)}>
                                                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                                                    <Typography>Ngo Name: </Typography>
                                                    <Typography>{item.Name}    , </Typography>
                                                    <Typography> Event name: </Typography>
                                                    <Typography>{item.eventName}    ,    </Typography>
                                                    <Typography> Event Description: </Typography>
                                                    <Typography>{item.eventDescription}{'   '}    ,</Typography>
                                                    <Typography>{"click to donate"}</Typography>
                                                </ExpansionPanelSummary>
                                                <ExpansionPanelDetails style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                                    <Submititems callbackFromParent={myCallback}
                                                        donormail={mail}
                                                        donorname={name}
                                                        ngomail={item.Email}
                                                        ngoname={item.Name}
                                                        eventname={item.eventName}
                                                        volunteermail={item.volunteermail}
                                                    />
                                                    <Typography>
                                                        Donated {count1} {count2} {count3}
                                                    </Typography>


                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        }
                                        )
                                        }


                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <Typography>sb-submitted by, cb-collected by</Typography>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>

                                                    <TableCell>ngoname</TableCell>
                                                    <TableCell align="right">eventname</TableCell>
                                                    <TableCell align="right">ngomail</TableCell>
                                                    <TableCell align="right">volunteermail</TableCell>
                                                    <TableCell align="right">rice</TableCell>
                                                    <TableCell align="right">clothes</TableCell>
                                                    <TableCell align="right">blankets</TableCell>
                                                    <TableCell align="right">sbdonor</TableCell>
                                                    <TableCell align="right">cbvolunteer</TableCell>
                                                    <TableCell align="right">sbvolunteer</TableCell>
                                                    <TableCell align="right">cbngo</TableCell>

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {items.map(function (row, index) {
                                                    return <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {row.ngoname}
                                                        </TableCell>
                                                        <TableCell align="right">{row.eventname}</TableCell>
                                                        <TableCell align="right">{row.ngomail}</TableCell>
                                                        <TableCell align="right">{row.volunteermail}</TableCell>
                                                        <TableCell align="right">{row.rice}</TableCell>
                                                        <TableCell align="right">{row.clothes}</TableCell>
                                                        <TableCell align="right">{row.blankets}</TableCell>
                                                        <TableCell align="right">{<Seticondonor value={row} mail={mail} />}</TableCell>
                                                        <TableCell align="right">{<Seticon value={row.cbvolunteer} />}</TableCell>
                                                        <TableCell align="right">{<Seticon value={row.sbvolunteer} />}</TableCell>

                                                        <TableCell align="right">{<Seticon value={row.cbngo} />}</TableCell>
                                                    </TableRow>
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <Typography>sb-submitted by, cb-collected by</Typography>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>

                                                    <TableCell>ngoname</TableCell>
                                                    <TableCell align="right">eventname</TableCell>
                                                    <TableCell align="right">ngomail</TableCell>
                                                    <TableCell align="right">donormail</TableCell>
                                                    <TableCell align="right">rice</TableCell>
                                                    <TableCell align="right">clothes</TableCell>
                                                    <TableCell align="right">blankets</TableCell>
                                                    <TableCell align="right">sbdonor</TableCell>
                                                    <TableCell align="right">cbvolunteer</TableCell>
                                                    <TableCell align="right">sbvolunteer</TableCell>
                                                    <TableCell align="right">cbngo</TableCell>

                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {items2.map(function (row, index) {
                                                    return <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {row.ngoname}
                                                        </TableCell>
                                                        <TableCell align="right">{row.eventname}</TableCell>
                                                        <TableCell align="right">{row.ngomail}</TableCell>
                                                        <TableCell align="right">{row.donormail}</TableCell>
                                                        <TableCell align="right">{row.rice}</TableCell>
                                                        <TableCell align="right">{row.clothes}</TableCell>
                                                        <TableCell align="right">{row.blankets}</TableCell>
                                                        <TableCell align="right">{<Seticon value={row.sbdonor} />}</TableCell>
                                                        <TableCell align="right">{<Seticonvol1 value={row} mail={mail} />}</TableCell>
                                                        <TableCell align="right">{<Seticonvol2 value={row} mail={mail} />}</TableCell>
                                                        <TableCell align="right">{<Seticon value={row.cbngo} />}</TableCell>
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