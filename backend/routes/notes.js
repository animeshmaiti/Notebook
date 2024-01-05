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

router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const { title, description, tag } = req.body;
    // create a new note object
    try {
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //find the note to update and update it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send('Not Found');
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('not allowed')
        }
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})

router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        //find the note to delete and delete it
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).send('Not Found');
        }
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send('not allowed')
        }
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "success": "note has been deleted",note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error");
    }
})
module.exports = router;