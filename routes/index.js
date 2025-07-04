const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');  // import the auth middleware

// Welcome page (public)
router.get('/', (req, res) => res.render('welcome'));

// Dashboard (protected route)
router.get('/dashboard', ensureAuthenticated, (req, res) => 
  res.render('dashboard', { user: req.user })  // pass user to view
);

module.exports = router;
