const express = require('express');
const asyncHandler = require('express-async-handler');
const { Group, Event, Member } = require('../../db/models');


const router = express.Router();

// http://localhost:5000/api/groups
router.get('/', asyncHandler( async (req, res) => {
    const groups = await Group.findAll();
    res.json(groups)
}));

// http://localhost:5000/api/groups/:id
router.get('/:id(\\d+)', asyncHandler( async (req, res) => {
    const id = Number(req.params.id);
    const group = await Group.findOne({
        where: { id },
        include: {all: true}
        });
    res.json(group);
}));

router.post('/new', asyncHandler(async(req, res) => {
    const { name, about, imageUrl, userId, city, state } = req.body;
    const group = await Group.create({ name, about, imageUrl, userId, city, state });
    return res.json({group})
}));

module.exports = router;
