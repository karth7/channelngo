const express = require('express');

const router = express.Router();

const donations = require('../models/donations');


router.post('/ngodonations', (req, res) => {

    donations.find({ ngomail: req.body.email, ngoname: req.body.name }, {
        _id: 0, donormail: 1,
        donorname: 1,
        eventname: 1,
        volunteermail: 1,
        rice: 1,
        clothes: 1,
        blankets: 1,
        sbdonor: 1,
        cbvolunteer: 1,
        sbvolunteer: 1,
        cbngo: 1,
        donationtime: 1


    }).then((data) => {
        console.log(data);
        res.json(data);
    });
});

module.exports = router;