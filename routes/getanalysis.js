const express = require('express');

const router = express.Router();

const Ngo = require('../models/Ngo');

router.post('/getanalysis', (req, res) => {
    Ngo.find({ addday: { $lte: req.body.day }, remday: { $gt: req.body.day } }).then((data) => {
        res.json(data)
        console.log(data.length)
    })
        ;
})


module.exports = router;