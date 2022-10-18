//schema to create condition reports!

const mongoose = require('./connection')

const {Schema} = mongoose

const conditionSchema = new Schema({ //make sure your schema names are capitalized
    trailUpdate:{
        
            type: String,
             required: false //be more aware of your indentation and white space
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

