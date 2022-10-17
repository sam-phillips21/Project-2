// import dependencies
//have schema to generate new trails!
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')


const conditionSchema = require('./condition')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

const trailSchema = new Schema(
	{
		state: { type: String, required: true },
		location: { type: String, required: true },
        trail: { type: String, required: true },
		type: { type: String, required: true},
		Description: { type: String, required: true},
		Difficulty: { type: String, required: true},
		
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		},
		conditions: [conditionSchema]
	},
	{ timestamps: true }
)

const Trail = model('Trail', trailSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Trail