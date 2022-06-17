const router = require('express').Router();
const {
  Cart, Sock, Pattern, Picture, Combination, User, Favorite,
} = require('../db/models');

router.get('/', async (req, res) => {
  let favorite;
  try {
    favorite = await User.findOne({
      where: { id: 1 },
      include: [
        {
          model: Combination,
          as: 'UserFavorite',
          include: [{ model: Sock }, { model: Pattern }, { model: Picture }],
        },
      ],
      // raw: true
    });
    // console.log('combination::::::::::::::', JSON.parse(JSON.stringify(combination.UserCart[0])));
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
    // console.log('UserCart:::::::::::::',JSON.parse(JSON.stringify(favorite[0].UserCart)));
    return res.render('favorites', favorite); // передаю в хбс полученный массив с объектами
  } catch (error) {
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {}
    // });
    console.log(error);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const favorites = await Favorite.destroy({ where: { id: req.params.id } });
    res.json({ favorites });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
