const express = require("express");

const router = express.Router();

let notes = [];


// GET all notes
router.get("/", (req, res) => {
    res.json(notes);
});


// CREATE note
router.post("/", (req, res) => {

    const newnotes = {
        id: Date.now(),
        title: req.body.title,
        description: req.body.description
    };

    notes.push(newnotes);

    res.status(201).json({
        message: "Note added",
        note: newnotes
    });

});


// GET single note
router.get("/:id", (req, res) => {

    const note = notes.find(
        n => n.id == req.params.id
    );

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(note);

});


// UPDATE note
router.put("/:id", (req, res) => {

    const note = notes.find(
        n => n.id == req.params.id
    );

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    note.title = req.body.title;
    note.description = req.body.description;

    res.json({
        message: "Note updated",
        note
    });

});


// DELETE note
router.delete("/:id", (req, res) => {

    notes = notes.filter(
        n => n.id != req.params.id
    );

    res.json({
        message: "Note deleted"
    });

});


module.exports = router;