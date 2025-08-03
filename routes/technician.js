const express = require('express');
const router = express.Router();
const { ensureLoggedIn, checkRole } = require('../middlewares/authMiddleware');

router.get('/dashboard', ensureLoggedIn, checkRole('labtech'), (req, res) => {
  res.render('dashboard/technician', { user: req.session });
});

module.exports = router;
