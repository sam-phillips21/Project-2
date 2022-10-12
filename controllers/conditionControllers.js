const { Router } = require("express")
const express = require("express")
const Trail = require("../models/trail")

const router = express.Router()

router.post('/:trailId', (req, res) => {
    const trailId = req.params.trailId

    if (req.session.loggedIn) {
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }
    Trail.findById(trailId)

        .then(trail => {
            trail.conditions.push(req.body)

            return trail.save()
        })
        .then(trail => {
            res.redirect(`/trails/${trail.id}`)
        })
        .catch(error => res.redirect(`/error?error=${error}`))
})

router.delete('/delete/:trailId/:condId', (req, res) => {
    const trailId = req.params.trailId
    const condId = req.params.condId
    
    Trail.findById(trailId)
        .then(trail => {
        const theCondition = trail.condtions.id(condId)
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