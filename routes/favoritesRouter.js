const router = require('express').Router();

const {
  Favorite, Cart, Sock, Pattern, Picture, Combination, User,
} = require('../db/models');

router.get('/', async (req, res) => {
  let favorite;
  try {
    favorite = await User.findOne({

      where: { id: req.session.user.id },
      include: [
        {
          model: Combination,
          as: 'UserFavorite',
          include: [{ model: Sock }, { model: Pattern }, { model: Picture }],
        },
      ],
    });
    // console.log(JSON.parse(JSON.stringify(favorite)));
    favorite = {
      name: favorite.name,
      id: favorite.id,
      favorites: favorite.UserFavorite.map((el) => ({
        comb_id: el.id,
        pic_url: el.Picture.pic_url,
        pattern_url: el.Pattern.pattern_url,
        pattern_name: el.Pattern.pattern_name,
        sock_url: el.Sock.hex,
        qty: el.Favorite.qty,
      })),
    };
    console.log('favorites: ', JSON.parse(JSON.stringify(favorite)));
    return res.render('favorites', favorite); // передаю в хбс полученный массив с объектами
  } catch (error) {
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {}
    // });
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { color_id, pattern_id, picture_id } = req.body;
    const [id] = await Combination.findOrCreate({
      where: { sock_id: color_id, pattern_id, pic_id: picture_id },
    });
    await Favorite.create({ user_id: req.session.user.id, comb_id: JSON.parse(JSON.stringify(id.id)) });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id: ', id);

    const favorites = await Favorite.destroy({ where: { comb_id: id } });
    res.json({ favorites });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
