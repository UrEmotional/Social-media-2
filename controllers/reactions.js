const Reaction = require('../models/reaction');

const ReactionsController = {
  createReaction: async (req, res) => {
    const reaction = await Reaction.create(req.body);
    res.json(reaction);
  },

  deleteReactionById: async (req, res) => {
    await Reaction.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  },
};

module.exports = ReactionsController;