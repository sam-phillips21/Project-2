//have ten pieces of seeded data

const mongoose = require('./connection')
const Trail = require('./trail')

const db = mongoose.connection

db.on('open', () => {
    
    const startTrails = [
        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Rush", type:"singletrack", Description:"Newly built trail at CGSP. This trail is unique and has man made features built on the boulders along the trail. This trail is super fun and challengeing and becomes more fun the more familiar you are with it. This trail features extremely challnging obstacles.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Standard", type:"singletrack", Description:"Gold Standard is a fun singletrack downhill trail. Uphill travel is not allowed on Gold Standard. This trail includes the classic CGSP rock sections and great corners.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Mo Rocka", type:"singletrack", Description:"Mo Rocka starts with a difficult climb at the base of Albert's Alley. At the junction of Albert's Alley, head UP Crow Creek until you reach the end of Crow Creek. Climb steep, rocky sections until you reach the top of Mo Rocka. Enjoy a technical descent with large boulders and fun corners. Mo Rocka ends near the bottom of Crow creek.", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Stone Temple", type:"singletrack", Description:"Stone Temple is one of the best ways to navigate around the trail system at CGSP. Stone Temple is a fun way to access other technical trails. This trail can be enjoyed climbing or descending. This trail is considered intermediate but there are plenty of ways to spice it up.", Difficulty: "2/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Crow Creek", type:"singletrack", Description:"Crow creek is a popular trail to connect the upper CGSP trails to the lower trails in the park. It offers some fun riding but it is very up and down. There are some extremely rocky sections where you might have to carry your bike to get through them. This is a very scenic trail. Enjoy the views as you struggle through the boulders.", Difficulty: "3/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Ignoramus", type:"singletrack", Description:"Ignoramus is a fun short trail that can be reached from Stone Temple. A fun variation or addition to the Stone Temple Loop.", Difficulty: "3/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Watch", type:"singletrack", Description:"This trail is a fun technical downhill trail. Be advised there are rock drops and difficult features. As the name implies, Gold Watch is CGSP Gold. Enjoy the ride!", Difficulty: "4/5" },

        { state: "Wyomimg", location: "Curt Gowdy State Park", trail: "El Alto", type:"singletrack", Description:"El Alto trail takes you to the highest spot in CGSP. This sounds tempting, but be advised of the steep rocky climbs involved. This trail is technical and steep. The trail is just under a mile and is not easy", Difficulty: "5/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Albert's Alley", type:"singletrack", Description:"Albert's Alley is a super fun and flowy trail. This trail will connect you from the upper CGSP trails and give you access to Crow Creek. The trail starts with a short climb at the base of Gold Rush and continues into a fun downhill. This trail ends at the bridge. Cross the bridge to access Crow Creek. Use caution as the bridge is narrow and difficult to pedal across", Difficulty: "3/5" },

        { state: "Wyoming", location: "Curt Gowdy State Park", trail: "Gold Standard", type:"singletrack", Description:"Gold Standard is a fantastic downhill trail. You can reach this trail from Stone Temple. This trail is apart of the CGSP Gold trail system. Make sure to ride them all. This trail is slightly easier than Gold Rush and has lots of great corners and man made berms. Gold standard has great flow and offers a very enjoyable ride.", Difficulty: "4/5" },
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