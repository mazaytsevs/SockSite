const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/signin')
  .get((req, res) => {
    res.render('signin');
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const currentUser = await User.findOne({ where: { email } });
      if (currentUser && await bcrypt.compare(password, currentUser.pass)) {
        req.session.user = { id: currentUser.id, name: currentUser.name };
        return res.redirect('/home');
      }
      res.redirect('/user/signin');
    } else {
      res.redirect('/user/signin');
    }
  });

router.route('/signup')
  .get((req, res) => {
    res.render('signup');
  })
  .post(async (req, res) => {
    const { name, password, email } = req.body;
    if (name && password && email) {
      try {
        const newUser = await User.create({
          name,
          email,
          pass: await bcrypt.hash(password, Number(process.env.SALTROUNDS)),
        });
        req.session.user = { id: newUser.id, name: newUser.name };
        return res.redirect('/home');
      } catch (err) {
        console.log('Не получилось зарегистрировать', err);
        res.redirect('/user/signup');
      }
    } else {
      return res.redirect('/user/signup');
    }
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.clearCookie('sid').redirect('/home');
  });

  
module.exports = router;
