const express = require('express');

const router = express.Router();

const signup = require('../models/signup');

router.post('/signin', (req, res) => {
    const as = signup.find({
        Email: req.body.Email,
        password: req.body.password,
        role: req.body.role
    }, { _id: 0, Email: 1, firstname: 1 }).then((data) => {
        console.log(data);
        res.json(data);
    });


});


module.exports = router;