const express = require('express');
const asyncHandler = require('express-async-handler');
const { Event } = require('../../db/models');

const router = express.Router();

//GET// http://localhost:5000/api/events
router.get('/:city/:state', asyncHandler( async (req, res) => {
    const { city, state } = req.params;
    const events = await Event.findAll({
        where: {
            city, state,
        }
    });
    res.json(events);
}));

router.get('/:id(\\d+)', asyncHandler( async (req, res) =>{
    const id = Number(req.params.id);
    const event = await Event.findOne({
        where: { id },
        include: {all: true}
    });
    res.json(event);
}))

//POST// http://localhost:5000/api/events

module.exports = router;
