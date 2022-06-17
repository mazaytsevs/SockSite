const router = require('express').Router();
const { Pattern, Picture, Sock } = require('../db/models');
const { route } = require('./homeRouter');

router.route('/')
  .get(async (req, res) => {
    const patterns = await Pattern.findAll({ offset: 1 });
    const pictures = await Picture.findAll({ offset: 1 });
    const colors = await Sock.findAll({ offset: 1 });
    // console.log(JSON.parse(JSON.stringify(colors)));
    res.render('generator', { patterns, pictures, colors });
  });

router.post('/output', async (req, res) => {
  const { pattern_id, picture_id, color_id } = req.body;
  const pattern = await Pattern.findOne({ where: { id: pattern_id } });
  const picture = await Picture.findOne({ where: { id: picture_id } });
  const color = await Sock.findOne({ where: { id: color_id } });
  const { pattern_url } = pattern;
  const picture_url = picture.pic_url;
  const color_hex = color.hex;
  res.json({ pattern_url, picture_url, color_hex });
});

module.exports = router;
