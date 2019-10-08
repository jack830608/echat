const mongoose = require('mongoose')
const { plugin } = require('../lib/database')
const { Schema } = mongoose

let schema = new Schema({
    name: { 
        type: String 
    },
    mail: { 
        type: String 
    },
    leader: {
        type: Boolean,
        default: false
    }
}).plugin(plugin)

module.exports = mongoose.model('User', schema)