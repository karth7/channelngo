const express = require('express');

const router = express.Router();

const donations = require('../models/donations');


router.post('/volupdate1', (req, res) => {

    donations.updateOne({
        donormail: req.body.email,
        ngomail: req.body.ngomail,
        ngoname: req.body.ngoname,
        eventname: req.body.eventname,
        volunteermail: req.body.volunteermail,
        rice: req.body.rice,
        clothes: req.body.clothes,
        blankets: req.body.blankets,
        sbdonor: req.body.sbdonor,
        cbvolunteer: req.body.cbvolunteer,
        sbvolunteer: req.body.sbvolunteer,
        cbngo: req.body.cbngo



    }, { $set: { "cbvolunteer": true } }).then(() => {
        res.json("updated");
    })
});

module.exports = router;