const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

// GET entry by ID
router.get('/getEntry/:id', async (req, res) => {
  try {
    const entry = await Entry.findByPk(req.params.id);
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create or update entry
router.post('/upsertEntry', async (req, res) => {
  try {
    const { Id, Name, Age } = req.body;
    
    let entry;
    if (Id) {
      // Update existing entry
      entry = await Entry.findByPk(Id);
      if (!entry) {
        return res.status(404).json({ message: 'Entry not found' });
      }
      await entry.update({ Name, Age });
    } else {
      // Create new entry
      entry = await Entry.create({ Name, Age });
    }
    
    res.status(200).json(entry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE entry by ID
router.delete('/deleteEntry/:id', async (req, res) => {
  try {
    const entry = await Entry.findByPk(req.params.id);
    
    if (!entry) {
      return res.status(404).json({ message: 'Entry not found' });
    }
    
    await entry.destroy();
    res.json({ message: 'Entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;