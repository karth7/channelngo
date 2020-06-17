const express = require('express');

const router = express.Router();

const signup = require('../models/signup');

router.post('/tovolunteer', (req, res) => {
    signup.updateOne({ Email: req.body.mail }, { $set: { 'role': 'Volunteer' } }).then(() => {
        res.json('updated');
    })
})
module.exports = router;