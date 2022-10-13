// Import Dependencies
const express = require('express')
const Trail = require('../models/trail')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 


// router.use((req, res, next) => {
// 	// checking the loggedIn boolean of our session
// 	if (req.session.loggedIn) {
// 		// if they're logged in, go to the next thing(thats the controller)
// 		next()
// 	} else {
// 		// if they're not logged in, send them to the login page
// 		res.redirect('/auth/login')
// 	}
// })

// Routes

// index ALL
router.get('/', (req, res) => {
	Trail.find({})
		.populate("conditions.author", "username")
		.then(trails => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			const userId = req.session.userId

			res.render('trails/', { trails, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})



// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('trails/new', { username, loggedIn, userId })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	// req.body.ready = req.body.ready === 'on' ? true : false

	req.body.owner = req.session.userId
	Trail.create(req.body)
		.then(trail => {
			// console.log('this was returned from create', trail)
			const username = req.session.username
            const loggedIn = req.session.loggedIn
            const userId = req.session.userId
			res.redirect('/trails')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
// router.get('/:id/edit', (req, res) => {
// 	// we need to get the id
// 	const trailId = req.params.id
// 	Trail.findById(trailId)
// 		.then(trail => {
// 			res.render('trails/edit', { trail })
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })

// update route
// router.put('/:id', (req, res) => {
// 	console.log("input fucntion")
// 	const trailId = req.params.id
// 	req.body.ready = req.body.ready === 'on' ? true : false

// 	Trail.findByIdAndUpdate(trailId, req.body, { new: true })
// 		.then(trail => {
// 			res.redirect(`/trails/${trail.id}`)
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })
// index that shows only the user's examples
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	Trail.find({ owner: userId })
		.then(trails => {
			res.render('trails/index', { trails, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})
// show route
// router.get('/:id', (req, res) => {
// 	const trailId = req.params.id
// 	Trail.findById(trailId)
// 		.then(trail => {
//             const {username, loggedIn, userId} = req.session
// 			res.render('trails/show', { trail, username, loggedIn, userId })
// 		})
// 		.catch((error) => {
// 			res.redirect(`/error?error=${error}`)
// 		})
// })
router.get("/edit/:id", (req, res) => {
    const username = req.session.username
    const loggedIn = req.session.loggedIn
    const userId = req.session.userId

    const trailId = req.params.id

    Trail.findById(trailId)
       
        .then(trail => {
			(console.log("hit"))
            res.render('trails/edit', { trail, username, loggedIn, userId })
        })
       
        .catch(err => {
			(console.log("hit"))
            res.redirect(`/error?error=${err}`)
			
        })
  
})
router.put("/:id", (req, res) => {
    console.log("req.body initially", req.body)
    const id = req.params.id

   
    Trail.findById(id)
        .then(trail => {
            if (trail.owner == req.session.userId) {
                // must return the results of this query
                return trail.updateOne(req.body)
            } else {
                res.sendStatus(401)
            }
        })
        .then(() => {
            // console.log('returned from update promise', data)
            res.redirect(`/trails/${id}`)
        })
        .catch(err => res.redirect(`/error?error=${err}`))
})

// delete route
router.delete('/:id', (req, res) => {
	const trailId = req.params.id
	console.log("this is the trailID", trailId)
	Trail.findByIdAndRemove(trailId)
		
		.then(trail => {
			res.redirect('/trails')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

router.get("/:id", (req, res) => {
    const id = req.params.id

    Trail.findById(id)

	.populate("conditions.author", "username")
	.then(trail => {
		const username = req.session.username
		const loggedIn = req.session.loggedIn
		const userId = req.session.userId
		console.log("this is trail auth", trail.conditions)
		console.log('this is userId', userId )
		
		res.render('trails/show', { trail, username, loggedIn, userId })
	})
	.catch(err => res.redirect(`/error?error=${err}`))
})

// Export the Router
module.exports = router