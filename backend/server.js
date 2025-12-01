const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// -----------------------------
// GET all notes
// -----------------------------
app.get("/notes", (req, res) => {
  const sql = "SELECT id, text FROM notes";  // ✔ fixed column name
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// -----------------------------
// POST (add a note)
// -----------------------------
app.post("/notes", (req, res) => {
  const { text } = req.body;

  const sql = "INSERT INTO notes (text) VALUES (?)"; // ✔ fixed column name
  db.query(sql, [text], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ id: result.insertId, text });
  });
});

// -----------------------------
// DELETE a note
// -----------------------------
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM notes WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err });

    res.json({ message: "Note deleted", id });
  });
});

// -----------------------------
// Start server
// -----------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
