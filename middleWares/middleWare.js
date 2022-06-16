const checkSession = (req, res, next) => {
  // console.log('req.session ====>>', req.session);

  if (req.session.userid) {
    res.locals.user = {
      name: req.session.userName,
      id: req.session.userid,
    };

    return next();
  }
  next();
};

module.exports = { checkSession };
