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

module.exports = {findListing}  

