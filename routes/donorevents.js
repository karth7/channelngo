const express = require('express');

const router = express.Router();

const Ngo = require('../models/Ngo');

router.get('/donorevents', (req, res) => {
    console.log(req.body);
    Ngo.find({}, { _id: 0, eventName: 1, eventDescription: 1, Name: 1, Email: 1, volunteermail: 1 }).then((data) => {
        console.log(data);
        res.json(data);
    });


});


module.exports = router;