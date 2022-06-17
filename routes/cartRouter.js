const router = require('express').Router();
const {
  Cart, Sock, Pattern, Picture, Combination, User,
} = require('../db/models');

router.get('/', async (req, res) => {
  let combination;
  try {
    combination = await User.findOne({

      where: { id: req.session.user.id },

      include: [
        {
          model: Combination,
          as: 'UserCart',
          include: [{ model: Sock }, { model: Pattern }, { model: Picture }],
        },
      ],
    });
    combination = {
      name: combination.name,
      id: combination.id,
      carts: combination.UserCart.map((el) => ({
        comb_id: el.id,
        pic_url: el.Picture.pic_url,
        pattern_url: el.Pattern.pattern_url,
        pattern_name: el.Pattern.pattern_name,
        sock_hex: el.Sock.hex,
        qty: el.Cart.qty,
      })),
    };
    console.log('combination: ', JSON.parse(JSON.stringify(combination)));

    return res.render('cart', combination); // передаю в хбс полученный массив с объектами
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
    await Cart.create({ user_id: req.session.user.id, comb_id: JSON.parse(JSON.stringify(id.id)), qty: 1 });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log('id: ', id);
    const carts = await Cart.destroy({ where: { comb_id: id } });
    res.json({ carts });
  } catch (error) {
    res.json(error);
  }
});

router.get('/:id/minus', async (req, res) => {
  const comb_id = req.params.id;
  const user_id = req.session.user.id;
  try {
    const cart = await Cart.findOne({ where: { user_id, comb_id } });
    console.log(JSON.parse(JSON.stringify(cart)));
    if (cart.qty > 1) {
      cart.qty -= 1;
      cart.save();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

router.get('/:id/plus', async (req, res) => {
  const comb_id = req.params.id;
  const user_id = req.session.user.id;
  try {
    const cart = await Cart.findOne({ where: { user_id, comb_id } });
    console.log(JSON.parse(JSON.stringify(cart)));
    if (cart.qty > 1) {
      cart.qty += 1;
      cart.save();
      res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
