// pages/api/data.js
import pool from "../../lib/db";

export default async function handler(req, res) {
  const { rows } = await pool.query("SELECT * FROM your_table");
  res.status(200).json(rows);
}
