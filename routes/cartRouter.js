const router = require('express').Router();
const {
  Cart, Sock, Pattern, Picture, Combination, User,
} = require('../db/models');

router.get('/', async (req, res) => {
  let combination;
  try {
    combination = await User.findOne({
      where: { id: 1 },
      include: [
        {
          model: Combination,
          as: 'UserCart',
          include: [{ model: Sock }, { model: Pattern }, { model: Picture }],
        },
      ],
      // raw: true
    });
    combination = {
      name: combination.name,
      id: combination.id,
      carts: combination.UserCart.map((el) => ({
        pic_url: el.Picture.pic_url,
        pattern_url: el.Pattern.pattern_url,
        pattern_name: el.Pattern.pattern_name,
        sock_url: el.Sock.hex,
        qty: el.Cart.qty,
      })),
    };
    console.log('combination: ', JSON.parse(JSON.stringify(combination)));
    // console.log('UserCart:::::::::::::',JSON.parse(JSON.stringify(combination[0].UserCart)));
    return res.render('cart', combination); // передаю в хбс полученный массив с объектами
  } catch (error) {
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {}
    // });
    console.log(error);
  }
});

module.exports = router;
