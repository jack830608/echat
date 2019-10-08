const mongoose = require('mongoose')
const { plugin } = require('../lib/database')
const { Schema } = mongoose

let schema = new Schema({
    name: { // 事件名稱
        type: String,
        required: true 
    },
    confirmedDate: { // 最後決定的舉辦日期、時間
        type: String
    },
    startDate: { // 選定日期區間的起始日
        type: Date 
    },
    endDate: { // 選定日期區間的結束日
        type: Date 
    },
    startTime: { // 選定特定時間的開始時間
        type: String 
    },
    endTime: { // 選定特定時間的結束時間
        type: String 
    },
    date: { // 選定特定時間的日期
        type: Date 
    },
    attendance: [{ // 參與者
        type: Schema.Types.ObjectId,
        ref:"User",
        required: true
    }],
    location: { // 事件地點
        type: String
    },
    remark: { // 事件的簡介、備註
        type: String
    },
    code: { // 查詢碼
        type: String 
    },
    qrcode: { // 查詢碼
        type: String 
    },
}).plugin(plugin)

module.exports = mongoose.model('Event', schema)