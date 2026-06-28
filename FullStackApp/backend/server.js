const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connects using values sent from docker-compose environment variables
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10
});

// Updated API route to pull dynamic data from the table created in init.sql
app.get('/api/message', (req, res) => {
  db.query('SELECT text_content FROM messages ORDER BY id DESC LIMIT 1', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database query error" });
    }
    if (results.length > 0) {
      res.json({ message: results[0].text_content });
    } else {
      res.json({ message: "No messages found in database." });
    }
  });
});

app.listen(5000, () => console.log('Backend running on port 5000'));
