const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
  createThought,
  addReaction,
} = require("../../controllers/thoughts");

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.post("/", createThought);
router.put("/:id", updateThoughtById);
router.delete("/:id", deleteThoughtById);
router.post("/:id/reactions", addReaction);

module.exports = router;