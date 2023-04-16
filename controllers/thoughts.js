const Thought = require('../models/thought');

const ThoughtsController = {
  getAllThoughts: async (req, res) => {
    const thoughts = await Thought.find().populate('reactions');
    res.json(thoughts);
  },

  getThoughtById: async (req, res) => {
    const thought = await Thought.findById(req.params.id).populate('reactions');
    res.json(thought);
  },

  createThought: async (req, res) => {
    const thought = await Thought.create(req.body);
    res.json(thought);
  },

  updateThoughtById: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(thought);
  },

  deleteThoughtById: async (req, res) => {
    await Thought.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  },

  addReaction: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.id, { $addToSet: { reactions: req.body.reactionId } }, { new: true });
    res.json(thought);
  },

  removeReaction: async (req, res) => {
    const thought = await Thought.findByIdAndUpdate(req.params.id, { $pull: { reactions: req.params.reactionId } }, { new: true });
    res.json(thought);
  },
};

module.exports = ThoughtsController;


