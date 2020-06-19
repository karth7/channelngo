const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    Email: String,
    Name: String,
    eventName: String,
    eventDescription: String,
    volunteermail: String,
    adddate: Date,
    addday: Number,
    addmonth: Number,
    remdate: Date,
    remday: Number,
    remmonth: Number,
    flag: Number
});

module.exports = mongoose.model('Ngo', newSchema);



