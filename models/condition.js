//schema to create condition reports!

const mongoose = require('./connection')

const {Schema} = mongoose

const conditionSchema = new Schema({
    trailUpdate:{
        
            type: String,
             required: false 
            },
		description: { type: String, required: true },
     
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: false
    }
}, {
    timestamps: true
})

module.exports = conditionSchema

