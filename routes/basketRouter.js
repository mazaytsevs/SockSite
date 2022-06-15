const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('basket');
});

module.exports = router;
