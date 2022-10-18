// const { Router } = require("express")
//Routes to create condition reports
const express = require("express")
const Trail = require("../models/trail")

const router = express.Router()
//Comments are needed to make it easier for your future self and other developers to read your code.
router.post('/:trailId', (req, res) => {
    console.log("route hit")
    const trailId = req.params.trailId

    if (req.session.loggedIn) {
        req.body.author = req.session.userId
        Trail.findById(trailId)

        .then(trail => {
            trail.conditions.push(req.body)

            return trail.save()
        })
        .then(trail => {
            res.redirect(`/trails/${trail.id}`)
        })
        .catch(error => res.redirect(`/error?error=${error}`))
    } else {
        console.log("else hit")
        res.redirect("/users/signup")
    }

})

router.delete('/delete/:trailId/:condId', (req, res) => {
    //Try to be more descriptive in your console logs so that you can keep track in your terminal
    console.log("hit")
    const trailId = req.params.trailId
    const condId = req.params.condId
    
    Trail.findById(trailId)
        .then(trail => {
        const theCondition = trail.conditions.id(condId)
        if (req.session.loggedIn) {
   
        if (theCondition.author == req.session.userId) {
    
        theCondition.remove()
        trail.save()
        res.redirect(`/trails/${trail.id}`)
   
    } else {
        const err = 'you%20are%20not%20authorized%20for%20this%20action'
        res.redirect(`/error?error=${err}`)
    }
} else {
    const err = 'you%20are%20not%20authorized%20for%20this%20action'
    res.redirect(`/error?error=${err}`)
}
})
// send an error if error
.catch(err => res.redirect(`/error?error=${err}`))

})
module.exports = router