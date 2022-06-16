const router = require('express').Router();
const {
  Pattern,
  Picture,
  Sock,
} = require('../db/models');

router.get('/', async (req, res) => {
  const patterns = await Pattern.findAll();
  const pictures = await Picture.findAll();
  console.log(JSON.parse(JSON.stringify(pictures)));
  res.render('generator', {
    patterns,
    pictures,
  });
});

module.exports = router;
