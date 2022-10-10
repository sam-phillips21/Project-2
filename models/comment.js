const mongoose = require('./connection')

const {Schema} = mongoose

const commentSchema = new Schema({
    note:{
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: true
    }
}, {
    timestamps: true
})

module.exports = commentSchema