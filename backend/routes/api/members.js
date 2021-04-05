const express = require('express');
const asyncHandler = require('express-async-handler');
const { Member } = require('../../db/models');

const router = express.Router();

router.post('/', asyncHandler( async (req, res) =>{
    const { userId, groupId } = req.body;
    const member = await Member.create({ userId, groupId });
    return res.json(member);
}))

module.exports = router;
