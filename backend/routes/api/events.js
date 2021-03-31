const express = require('express');
const asyncHandler = require('express-async-handler');
const { Event } = require('../../db/models');

const router = express.Router();

//GET// http://localhost:5000/api/events
router.get('/', asyncHandler( async (req, res) => {
    const events = await Event.findAll();
    res.json(events);
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) =>{
    const id = req.params.id;
    const event = await Event.findOne({where: { id }});
    res.json(event);
}))

//POST// http://localhost:5000/api/events

module.exports = router;
