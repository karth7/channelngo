const express = require('express');

const router = express.Router();

const signup = require('../models/signup');

router.get('/getvolunteers', (req, res) => {
    signup.find({ role: 'Volunteer' }, { _id: 0, Email: 1 }).then((data) => {
        res.json(data);
    })
});

module.exports = router;