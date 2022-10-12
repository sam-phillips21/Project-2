const mongoose = require('./connection')

const {Schema} = mongoose

const conditionSchema = new Schema({
    trailUpdate:{
        state: { type: String, required: true },
		location: { type: String, required: true },
        trail: { type: String, required: true },
		type: { type: String, required: true},
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',}
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        Required: true
    }
}, {
    timestamps: true
})

module.exports = conditionSchema