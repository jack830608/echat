const mongoose = require('mongoose')
const { plugin } = require('../lib/database')
const { Schema } = mongoose

let schema = new Schema({
    name: { 
        type: String 
    },
    email: { 
        type: String 
    },
    web: {
        type: String
    },
    mobile: {
        type: String
    }
}).plugin(plugin)

module.exports = mongoose.model('User', schema)