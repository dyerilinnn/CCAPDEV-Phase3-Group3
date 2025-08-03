function ensureLoggedIn(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.redirect('/auth/login');
  }
  next();
}

function checkRole(role) {
  return function (req, res, next) {
    if (req.session && req.session.role === role) {
      next();
    } else {
      res.status(403).send('Access denied.');
    }
  };
}

module.exports = { ensureLoggedIn, checkRole };
