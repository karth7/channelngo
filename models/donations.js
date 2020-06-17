const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    donormail: String,
    donorname: String,
    ngomail: String,
    ngoname: String,
    eventname: String,
    volunteermail: String,
    rice: Number,
    clothes: Number,
    blankets: Number,
    sbdonor: Boolean,
    cbvolunteer: Boolean,
    sbvolunteer: Boolean,
    cbngo: Boolean

});

module.exports = mongoose.model('donations', newSchema);