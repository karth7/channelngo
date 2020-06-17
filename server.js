// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bp = require('body-parser');
const cors = require('cors');

const path = require('path');

const app = express();
const routes = require('./routes/signup');
const routesignin = require('./routes/signin');
const routeaddevent = require('./routes/addevent');
const routegetevents = require('./routes/getevents');
const routedonorevents = require('./routes/donorevents');
const routedonations = require('./routes/donordonations');
const routedonations2 = require('./routes/donordonations2');
const routengodonations = require('./routes/ngodonations');
const routedonorupdate = require('./routes/donorupdate');
const routegetvolunteers = require('./routes/getvolunteers');
const routevolunteerdonation = require('./routes/volunteerdonation');
const routetovolunteer = require('./routes/tovolunteer');
const routevolupdate1 = require('./routes/volupdate1');
const routevolupdate2 = require('./routes/volupdate2');
const routengoupdate = require('./routes/ngoupdate');
const PORT = process.env.PORT || 8080; // Step 1


app.use(bp.json());
app.use(morgan('tiny'));

const MONGO_URI = 'mongodb+srv://karthik:reddy@cluster0-1l7p0.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(process.env.MONGODB_URI || MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Mongoose');
});

app.use(cors());
app.use(morgan('tiny'));



app.use('/', routes);
app.use('/', routesignin);
app.use('/', routeaddevent);
app.use('/', routegetevents);
app.use('/', routedonorevents);
app.use('/', routedonations);
app.use('/', routedonations2);
app.use('/', routengodonations);
app.use('/', routedonorupdate);
app.use('/', routegetvolunteers);
app.use('/', routevolunteerdonation);
app.use('/', routetovolunteer);
app.use('/', routevolupdate1);
app.use('/', routevolupdate2);
app.use('/', routengoupdate);


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT, console.log(PORT));