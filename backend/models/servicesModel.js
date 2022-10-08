const mongoose = require('mongoose')
const Schema = mongoose.Schema


const serviceSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    main_description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Service', serviceSchema)