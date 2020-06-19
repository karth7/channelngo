const express = require('express');

const router = express.Router();

const donations = require('../models/donations');


router.post('/ngoupdate', (req, res) => {

    donations.update({
        donormail: req.body.donormail,
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



    }, { $set: { "cbngo": true } }).then((data) => {
        console.log(data);
        console.log(req.body);
        console.log(req.body.ngomail);
        res.json("updated");
    })
});

module.exports = router;