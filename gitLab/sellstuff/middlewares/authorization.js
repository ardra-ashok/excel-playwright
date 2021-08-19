function checkAuthorization(req, res, next) {
  if (req.session) {
    if (req.session.user) {
      res.locals.isAuthenticated = true
      next()
    } else {
      res.redirect('/login')
    }
  } else {
    res.redirect('/login')
  }
}

/* function checkAuthorization(req, res, next) {
 if (req.session) {
  res.locals.isAuthenticated = true;
  next();
  
 }
 else {
  
 }
} */

module.exports = checkAuthorization
