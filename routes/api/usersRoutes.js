const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend
} = require("../../controllers/users");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.post('/:userId/friends', addFriend);
router.delete("/:id", deleteUserById);

module.exports = router;
