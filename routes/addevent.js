const express = require('express');

const router = express.Router();

const Ngo = require('../models/Ngo');

router.post('/addevent', (req, res) => {
    (new Ngo(req.body)).save((error) => {
        if (error) {
            res.json("not saved");
        }
        else {



            res.json((new Date()).getDate());
        }
    });


});


module.exports = router;