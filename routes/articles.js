const express = require('express');

const router = express.Router();

// Get all articles
router.get('/new', (req, res) => {
  res.render('articles/new');
});

module.exports = router;
