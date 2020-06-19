const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    donormail: String,
    donorname: String,
    ngomail: String,
    ngoname: String,
    eventname: String,
    volunteermail: String,
    donationtime: Date,
    volunteertime: String,
    money: Number,
    rice: Number,
    clothes: Number,
    blankets: Number,
    sbdonor: Boolean,
    cbvolunteer: Boolean,
    sbvolunteer: Boolean,
    cbngo: Boolean,
    donationday: Number

});

module.exports = mongoose.model('donations', newSchema);