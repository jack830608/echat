const mongoose = require('mongoose')
const { plugin } = require('../lib/database')
const { Schema } = mongoose

let schema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: String
    },
    info: {
        type: String
    },
    startTime: {
        type: String
    },
    endTime: {
        type: String
    },
    date: {
        type: Array
    },
    owner: [{ // 參與者
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }]
}).plugin(plugin)

module.exports = mongoose.model('Event', schema)