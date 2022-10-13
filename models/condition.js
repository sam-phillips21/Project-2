const mongoose = require('./connection')

const {Schema} = mongoose

const conditionSchema = new Schema({
    trailUpdate:{
        
            type: String,
             required: false 
            },
		description: { type: String, required: true },
        // trail: { type: String, required: true },
		// type: { type: String, required: true},
		// owner: {
		// 	type: Schema.Types.ObjectID,
		// 	ref: 'User',}
    // },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: false
    }
}, {
    timestamps: true
})

module.exports = conditionSchema