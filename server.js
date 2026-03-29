require('dotenv').config();
const express = require('express');
const path    = require('path');
const chat    = require('./api/chat');

const app  = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(express.json());

// API routes — must come before static so /api/* is never served as files
app.post('/api/chat', chat);
app.post('/api/generate-proposal', require('./api/generate-proposal'));

// Serve all static site files
app.use(express.static(path.join(__dirname)));

// Fallback: serve index.html for any unmatched route
app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Tarang Kulkarni — dev server`);
  console.log(`  http://localhost:${PORT}\n`);
});
