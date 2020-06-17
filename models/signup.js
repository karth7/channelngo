const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    firstname: String,
    lastname: String,
    Email: String,
    password: String,
    phone: Number,
    role: String,

});

module.exports = mongoose.model('signup', newSchema);



