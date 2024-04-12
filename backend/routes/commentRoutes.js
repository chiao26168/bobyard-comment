const express = require("express");
const router = express.Router();
const {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

router.route("/").get(getComments).post(createComment);
router
  .route("/:id")
  .get(getCommentById)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;
