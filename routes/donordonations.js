const express = require('express');

const router = express.Router();

const donations = require('../models/donations');



router.post('/donordonate', (req, res) => {

    (new donations(req.body)).save((error) => {
        if (error) {
            res.json("not saved");
        }
        else {
            res.json(req.body);
        }
    });

});




module.exports = router;