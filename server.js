require("dotenv").config() // Load ENV Variables
const express = require("express") 

const path = require("path") // import path module
const TrailRouter = require('./controllers/trailControllers')
const UserRouter = require('./controllers/userControllers')
const ConditionRouter = require('./controllers/conditionControllers')
const middleware = require('./utils/middleware')

const app = require("liquid-express-views")(express())

middleware(app)



app.get("/", (req, res) => {
    // res.send("Your server is running, better go out and catch it")
    // you can also send html as a string from res.send
    // res.send("<small style='color: red'>Your server is running, better go out and catch it</small>")
    if (req.session.loggedIn) {
        res.redirect('/trails')
    } else {
        res.render('index.liquid')
    }
})

app.use('/trails', TrailRouter)
app.use('/condtions', ConditionRouter)
app.use('/users', UserRouter)

app.get('/error', (req, res) => {
    // get session variables
    const { username, loggedIn, userId } = req.session
    const error = req.query.error || 'This page does not exist'

    res.render('error.liquid', { error, username, loggedIn, userId })
})

app.all('*', (req, res) => {
    res.redirect('/error')
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Now listening to the sweet sounds of port: ${PORT}`))