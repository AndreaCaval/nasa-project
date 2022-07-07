const mongoose = require('mongoose');

const launchesSchema = mongoose.Schema({
    flightNumber: { required: true, type: Number },
    mission: { required: true, type: String },
    rocket: { required: true, type: String },
    launchDate: { required: true, type: Date },
    target: { type: String },
    customers: [String],
    upcoming: { required: true, type: Boolean, default: true, },
    success: { required: true, type: Boolean, default: true, },
})

module.exports = mongoose.model('Launch', launchesSchema)