const express = require('express')
const router = express.Router();

const noteController = require('../controllers/noteController')

router.post('/api/notes' , noteController.createNote)
router.get('/api/notes' , noteController.getNotes)
router.patch('/api/notes/:id' , noteController.updateNotes)
router.delete('/api/notes/:id' , noteController.deleteNotes)

module.exports = router;