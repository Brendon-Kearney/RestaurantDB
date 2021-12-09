var express = require('express');
var router = express.Router();
var mongoClient = require('./../mongo/config')
var mongoQueries = require('./../mongo/queries')

/* GET restaurant listing. */
// localhost:3000/restaurant
router.get('/', async (req, res) => {

    let criteria =
  {

  }

  let numberOfListings = 2;

    console.log("RESTAURANTS", mongoQueries)    
    let result = await mongoQueries.findListings(criteria, numberOfListings)
    console.log(result)
    res.send (result)

    
});

module.exports = router;
