const db = require("../config/db");

const selectCommentList =
  "SELECT * FROM comments ORDER BY id LIMIT $1 OFFSET $2 ";
const selectCommentById = "SELECT * FROM comments WHERE id = $1";
const insertComment =
  "INSERT INTO comments (text, image) VALUES ($1, $2) RETURNING *";
const updateCommentText =
  "UPDATE comments SET text = $1 WHERE id = $2 RETURNING *";
const deleteCommentById = "DELETE FROM comments WHERE id = $1 RETURNING *";

// @desc    Fetch all comments
// @route   GET /api/comments
// @access  Public
const getComments = async (req, res) => {
  const { page_size, page_num } = req.query;
  const next_offset = page_size * page_num;

  try {
    const { rows } = await db.query(selectCommentList, [
      page_size,
      next_offset,
    ]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// @desc    Fetch single comment
// @route   GET /api/comments/:id
// @access  Public
const getCommentById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(selectCommentById, [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      res.json(rows);
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// @desc    Create a comment
// @route   POST /api/comments
// @access  Private/Admin
const createComment = async (req, res) => {
  const { text, image } = req.body;
  try {
    const { rows } = await db.query(insertComment, [text, image]);
    res.json(rows);
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// @desc    Update a comment
// @route   PUT /api/comments/:id
// @access  Public
const updateComment = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  try {
    const { rows } = await db.query(updateCommentText, [text, id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      res.json(rows);
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// @desc    Delete a comment
// @route   DELETE /api/comments/:id
// @access  Public
const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await db.query(deleteCommentById, [id]);
    if (rows.length === 0) {
      res.status(404).json({ error: "Comment not found" });
    } else {
      res.status(200).json({ message: "Comment deleted" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
