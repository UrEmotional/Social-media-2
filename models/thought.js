
// const mongoose = require('mongoose');

// const thoughtSchema = new mongoose.Schema({
//   thoughtText: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 1,
//     maxlength: 280,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (createdAt) => new Date(createdAt).toLocaleString(),
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   reactions: [
//     {
//       reactionBody: {
//         type: String,
//         required: true,
//         minlength: 1,
//         maxlength: 280,
//       },
//       username: {
//         type: String,
//         required: true,
//       },
//       createdAt: {
//         type: Date,
//         default: Date.now,
//         get: (createdAt) => new Date(createdAt).toLocaleString(),
//       },
//     },
//   ],
// }, {
//   toJSON: { virtuals: true },
//   toObject: { virtuals: true },
// });

// thoughtSchema.virtual('reactionCount').get(function () {
//   return this.reactions.length;
// });

// const Thought = mongoose.model('Thought', thoughtSchema);

// module.exports = Thought;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReactionSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAt) => new Date(createdAt).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;