import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();
const dbPath = path.resolve('./data/database.json');

// GET all entries
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  res.json(data);
});

// POST new entry
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
  data.push(req.body);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.status(201).json({ message: 'Data saved' });
});

export default router;
