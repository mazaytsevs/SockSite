const router = require('express').Router();
const { Pattern, Picture, Sock } = require('../db/models');

router.get('/generator', async (req, res) => {
  const patterns = await Pattern({})
  res.render('generator');
});

module.exports = router;
