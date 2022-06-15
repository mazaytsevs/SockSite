const router = require('express').Router();

router.get('/basket', async (req, res) => {
  res.render('basket');
});

module.exports = router;
