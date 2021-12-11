const mongoClient = require("./config");

async function findListing(criteria)
{
  let result = {}
  await mongoClient.connect()
    .then(connection=>connection.db('sample_restaurants'))
    .then(db=>db.collection('restaurants'))
    .then(restaurantListings=>{
        console.log("LISTINGS"); return restaurantListings.findOne()})
    .then(restaurant=>{ console.log ("RESULT", restaurant); result = restaurant})
    .catch(error => console.log(error))
  return result
}

async function findListings(criteria, nListings)
{
let result = [{name: "No matches"}]
await mongoClient.connect()
.then(connection=>connection.db('sample_restaurants'))
.then(db=>db.collection('restaurants'))
.then(restaurantListings=>restaurantListings
.find(criteria)
.limit(nListings))
.then(cursor=>cursor.toArray())
.then(restaurants=> result = restaurants)
.catch(error=>console.log(error))
return result
}

module.exports = {findListing, findListings} 

