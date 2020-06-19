const express = require('express');

const router = express.Router();

const Ngo = require('../models/Ngo');

router.post('/deleteevent', (req, res) => {
    Ngo.updateMany({
        Email: req.body.mail,
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription
    }, { $set: { "flag": 1, "remdate": new Date(), "remday": (new Date).getDate(), "remmonth": (new Date()).getMonth() } }).then(() => {
        res.json("deleted");
    });
});
module.exports = router;