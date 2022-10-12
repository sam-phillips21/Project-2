const mongoose = require('./connection')
const Trail = require('./trail')

const db = mongoose.connection

db.on('open', () => {
    
    const startTrails = [
        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Rush", type:"singletrack" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Standard", type:"singletrack" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Mo Rocka", type:"singletrack" },

        { state: "Wyomimg", location: "Curt Gowdy State Park", trail: "Stone Temple", type:"singletrack" },

        { state: "Wyoming", location:  "Curt Gowdy State Park", trail: "Crow Creek", type:"singletrack" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Ignoramus", type:"singletrack" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Watch", type:"singletrack" },

        { state: "Wyomimg", location: "Curt Gowdy State Park", trail: "El Alto", type:"singletrack" },

        { state: "Wyoming", location:  "Curt Gowdy State Park", trail: "Albert's Alley", type:"singletrack" },

        { state: "Wyoming", location:  "Curt Gowdy State Park", trail: "Middle Kingdom", type:"singletrack" },
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