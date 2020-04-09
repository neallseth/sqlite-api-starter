const express = require("express");
const router = express.Router();
const { readQuery, writeQuery } = require("../utils/queryHelpers");
const exampleDB = "chinook";

router.get("/", async (req, res) => {
  const sql = `SELECT * FROM playlists
      ORDER BY ?`;
  const params = ["PlaylistId"];

  const queryResponse = await readQuery(exampleDB, sql, params);

  res.send(queryResponse);
});

router.get("/:id", async (req, res) => {
  const sql = `SELECT * FROM playlists
      WHERE PlaylistId = ?`;
  const params = [req.params.id];

  const queryResponse = await readQuery(exampleDB, sql, params);

  res.send(queryResponse);
});

router.post("/add", async (req, res) => {
  const sql = `INSERT INTO playlists (Name)
  VALUES (?)`;
  const params = [req.body.name];

  const queryResponse = await writeQuery(exampleDB, sql, params);

  res.send(`Rows updated: ${queryResponse}`);
});

module.exports = router;
