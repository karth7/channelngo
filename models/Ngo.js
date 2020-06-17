const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSchema = new Schema({
    Email: String,
    Name: String,
    eventName: String,
    eventDescription: String,
    volunteermail: String,
});

module.exports = mongoose.model('Ngo', newSchema);



