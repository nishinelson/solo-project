const express = require('express');
const asyncHandler = require('express-async-handler');
const { RSVP } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler( async (req, res) =>{
    const { userId, eventId } = req.body;
    const rsvp = await RSVP.create({ userId, eventId });
    return res.json(rsvp);
}))

module.exports = router;
