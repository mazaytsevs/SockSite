const router = require('express').Router();
const { Cart, Sock, Pattern, Picture, Combination, User } = require('../db/models');

router.get('/', async (req, res) => {
  let combination;
  try {
    
    combination = await User.findOne({
      where: {id: req.session.user.id},
      include: [
        {
          model: Combination,
          as: 'UserCart',
          include: [{model: Sock}, {model: Pattern}, {model: Picture} ]
        },
      ],
      });
        combination = {
          name: combination.name,
          id: combination.id,
          carts: combination.UserCart.map(el=>({
            pic_url: el.Picture.pic_url,
            pattern_url: el.Pattern.pattern_url,
            pattern_name: el.Pattern.pattern_name,
            sock_url: el.Sock.hex,
            qty: el.Cart.qty
          }))
        }
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
    const {color_id, pattern_id, picture_id} = req.body
    const [ id ] = await Combination.findOrCreate({
      where: {sock_id: color_id, pattern_id, pic_id: picture_id}
    })
    await Cart.create({user_id: req.session.user.id, comb_id: JSON.parse(JSON.stringify(id.id)), qty: 1})
    res.sendStatus(200)
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
