const express = require('express');
const fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { validationResult, body } = require('express-validator');

const router = express.Router();

router.get('/fetchnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})

router.post('/addnotes', fetchuser, [
    body('title', 'enter a title min length of 3 ').isLength({ min: 3 }),
    body('description', 'enter a description min length of 5').isLength({ min: 5 }),
    body('tag')
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})

module.exports = router;