// make our .env variables available via process.env
require('dotenv').config()
// import mongoose
const mongoose = require('mongoose')

// connect to the database
const DATABASE_URL = process.env.DATABASE_URL

const CONFIG = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}

mongoose.connect(DATABASE_URL, CONFIG)
// save the connection in a variable
// const db = mongoose.connection

// create some notification
mongoose.connection
    .on('open', () => console.log('You are connected to mongo'))
    .on('close', () => console.log('You are disconnected from mongo'))
    .on('error', (error) => console.log(error))

// export the connection
module.exports = mongoose