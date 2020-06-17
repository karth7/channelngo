const express = require('express');

const signup = require('../models/signup');

const router = express.Router();

router.post('/signup', (req, res) => {
    (new signup(req.body)).save((error) => {
        if (error) {
            res.json("not saved");
        }
        else {
            res.json(req.body);
        }
    });

});
module.exports = router;