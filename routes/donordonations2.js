

const express = require('express');

const router = express.Router();

const donations = require('../models/donations');


router.post('/donordonation', (req, res) => {

    donations.find({ donormail: req.body.email, donorname: req.body.name }, {
        _id: 0, ngomail: 1,
        ngoname: 1,
        eventname: 1,
        volunteermail: 1,
        rice: 1,
        clothes: 1,
        blankets: 1,
        sbdonor: 1,
        cbvolunteer: 1,
        sbvolunteer: 1,
        cbngo: 1,
        donationtime: 1,
        volunteertime: 1


    }).then((data) => {
        console.log(data);
        res.json(data);
    });
});

module.exports = router;