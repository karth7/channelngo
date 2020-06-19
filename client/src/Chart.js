import React, { useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';



// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}
const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '80vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
  },


  paper: {
    padding: theme.spacing(0),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 480,
  },
}));




export default function Chart() {
  const theme = useTheme();
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [data, setData] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  useEffect(() => {
    for (var i = 0; i < 31; i++) {
      const payload = {
        day: i + 1
      }
      axios({
        url: '/getanalysis',
        method: 'POST',
        data: payload
      }).then((response) => {
        console.log(payload.day);
        console.log(response.data.length);
        data.push(createData(payload.day, response.data.length));

        console.log(data);
      })

    }
    for (var j = 0; j < 31; j++) {
      const payload2 = {
        day: j + 1
      }
      axios({
        url: '/donationanalysis',
        method: 'POST',
        data: payload2
      }).then((response) => {
        console.log(payload2.day);
        console.log(response.data.length);
        data2.push(createData(payload2.day, response.data));

        console.log(data);
      })

    }
    data2.push(createData(32, undefined))
  }, []);


  return (
    <div>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12}>
            <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Events hosted in the month</Title>
                <ResponsiveContainer>
                  <LineChart
                    data={data}
                    margin={{
                      top: 16,
                      right: 16,
                      bottom: 0,
                      left: 24,
                    }}
                  >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                      <Label
                        angle={270}
                        position="left"
                        style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                      >
                        Sales ($)
            </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </React.Fragment>
            </Paper>
          </Grid>
        </Container>
      </main>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid item xs={12} >
            <Paper className={fixedHeightPaper}>
              <React.Fragment>
                <Title>Donations in the month</Title>
                <ResponsiveContainer>
                  <LineChart
                    data={data2}
                    margin={{
                      top: 0,
                      right: 16,
                      bottom: 0,
                      left: 24,
                    }}
                  >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                      <Label
                        angle={270}
                        position="left"
                        style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                      >
                        Donations
          </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </React.Fragment>
            </Paper>
          </Grid>
        </Container>
      </main>
    </div>

  );
}