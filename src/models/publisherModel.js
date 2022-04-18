const mongoose = require('mongoose');

const pulisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter:String

}, { timestamps: true });

module.exports = mongoose.model('newwPublisher',pulisherSchema)
