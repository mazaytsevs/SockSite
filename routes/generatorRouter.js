const router = require('express').Router();

router.get('/generator', async (req, res) => {
  res.render('generator');
});

module.exports = router;
