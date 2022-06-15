const router = require('express').Router();

router.route('/signin')
  .get((req, res) => {
    res.render('signin');
  });










  router.route('/signup')
  .get((req, res) => {
    res.render('signup');
  })



  
  module.exports = router;
