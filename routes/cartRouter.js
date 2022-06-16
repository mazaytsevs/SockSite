const router = require('express').Router();
const { Cart, Sock, Pattern, Picture, Combination } = require('../db/models');

router.get('/', async (req, res) => {
  let cart;
  let combination;
  try {
    // carts = await Cart.findAll({
    //   // include: [{
    //   //   model: User
    //   // }]
    // })
    cart = await Cart.findAll({
      where: {
          user_id: 1, // подставить полученного юзера
        },
    })
    combination = await Combination.findAll({
      // where: {
      //   id: 1, // подставить полученного юзера
      // },
      include: [
        { model: Sock }, { model: Pattern }, { model: Picture }
      ],
      raw: true
    });
    console.log(JSON.parse(JSON.stringify(cart)));
    console.log(JSON.parse(JSON.stringify(combination)));
  return res.render('basket'); // передаю в хбс полученный массив с объектами
  } catch (error) {
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {}
    // });
    console.log(error);
  }
});

module.exports = router;

// this.belongsToMany(Combination, {through: 'Cart', foreignKey: 'user_id', as: "UserCart"}),
// this.belongsToMany(Combination, {through: 'Favorite', foreignKey: 'user_id', as: "UserFavorite"})
