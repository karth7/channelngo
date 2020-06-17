const express = require('express');

const signup = require('../models/signup');

const router = express.Router();

router.post('/modifyprofile', (req, res) => {
    signup.updateOne({ Email: req.body.mail }, {
        $set: {
            "phone": req.body.phone, "password": req.body.password
        }
    }).then(() => {
        res.json("updated");
    })
});

module.exports = router;