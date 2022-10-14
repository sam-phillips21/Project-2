const mongoose = require('./connection')
const Trail = require('./trail')

const db = mongoose.connection

db.on('open', () => {
    
    const startTrails = [
        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Rush", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Standard", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Mo Rocka", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyomimg", location: "Curt Gowdy State Park", trail: "Stone Temple", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location:  "Curt Gowdy State Park", trail: "Crow Creek", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Ignoramus", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Watch", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyomimg", location: "Curt Gowdy State Park", trail: "El Alto", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location:  "Curt Gowdy State Park", trail: "Albert's Alley", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location:  "Curt Gowdy State Park", trail: "Middle Kingdom", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built onto the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challenging obstacles.", Difficulty: "5/5" },
  ]



    Trail.deleteMany({})
        .then(deletedTrails => {
            console.log("this is what .remove returns", deletedTrails)

    Trail.create(startTrails)
        .then(data => {
            console.log('here are the newly created trails', data)
            db.close()
        })
    .catch(error => {
        console.log(error)
        // always close connection to db
            db.close()
        })
    })
    .catch(error => {
        console.log(error)
        db.close()
    })  

})