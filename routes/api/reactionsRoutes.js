const express = require('express');
const router = express.Router();
const { 
    createReaction, 
    deleteReactionById } = require('../../controllers/reactions');

router.post('/reactions', createReaction);
router.delete('/reactions/:id', deleteReactionById);

module.exports = router;