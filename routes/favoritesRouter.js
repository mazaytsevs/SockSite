const router = require('express').Router();

router.get('/favorites', async (req, res) => {
  res.render('favorites');
});

module.exports = router;
