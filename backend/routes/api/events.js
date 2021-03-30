const router = require('express').Router();
const asyncHandler = require('express-async-handler');


//GET// http://localhost:5000/api/events
router.get('/', asyncHandler( (res, req) => {
    res.json({test:'test'});
}))

//POST// http://localhost:5000/api/events

module.exports = router;
