function checkAdmin(req, res, next) {
  const admin = Boolean(Math.round(Math.random()));
  if (admin) {
    next();
  } else {
    res.redirect("/");
  }
}

module.exports = checkAdmin;
