const express = require('express');
const router = express.Router();
const { ensureLoggedIn, checkRole } = require('../middlewares/authMiddleware');

router.get('/dashboard', ensureLoggedIn, checkRole('student'), (req, res) => {
  res.render('dashboard/student', { user: req.session });
});

module.exports = router;
