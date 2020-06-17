import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import EngagementCard from "./Demo";
import Link from "@material-ui/core/Link";
import Orders from './Orders'
import SwipeableViews from 'react-swipeable-views';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles({
  root: {
    color: "white",
    background: "transparent",
    flexGrow: 1,
    boxShadow: 'none'
  },
  tab: {
    width: '95%',
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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



const CenteredTabs = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Item One" style={{ color: "white" }} />
        <Tab label="Item Two" style={{ color: "white" }} />
      </Tabs>
      <SwipeableViews
        axis={'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} className={classes.root}>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={4}>
                  <EngagementCard />
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={4}>
                  <EngagementCard userType = {props.userType} />
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={4}>
                  <EngagementCard />
                </Grid>
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.root}>
          <div className={classes.tab} >
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </div>
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}

export default  CenteredTabs