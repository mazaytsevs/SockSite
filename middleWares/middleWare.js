const checkSession = (req, res, next) => {
  // console.log('req.session ====>>', req.session);

  if (req.session.user) {
    res.locals.user = {
      name: req.session.user.name,
      id: req.session.user.id,
    };

    return next();
  }
  next();
};

module.exports = { checkSession };
