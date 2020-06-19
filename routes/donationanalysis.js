const express = require('express');

const router = express.Router();

const donations = require('../models/donations');

router.post('/donationanalysis', (req, res) => {
    donations.find({ donationday: req.body.day }).then((data) => {
        res.json(data.length)
        console.log(data.length)
    })
        ;
})


module.exports = router;