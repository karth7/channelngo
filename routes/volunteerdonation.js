const express = require('express');

const router = express.Router();

const donations = require('../models/donations');

router.post('/volunteerdonation', (req, res) => {
    donations.find({ volunteermail: req.body.email }).then((data) => {
        res.json(data);
    })
});
module.exports = router;