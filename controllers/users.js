const  User  = require('../models/user');

const UsersController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },

  getUserById: async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  },

  createUser: async (req, res) => {
    const user = await User.create(req.body);
    res.json(user);
  },

  updateUserById: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  },

  addFriend: async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id,
       { $addToSet: { friends: req.body.friendId } }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    } 
    res.json(user);
  },

  deleteUserById: async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  },
};

module.exports = UsersController;