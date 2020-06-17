const express = require('express');

const router = express.Router();

const Ngo = require('../models/Ngo');

router.post('/getevents', (req, res) => {
    console.log(req.body);
    Ngo.find({
        Email: req.body.Email,
        Name: req.body.Name
    }, { _id: 0, eventName: 1, eventDescription: 1, volunteermail: 1 }).then((data) => {
        console.log(data);
        res.json(data);
    });


});


module.exports = router;