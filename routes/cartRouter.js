const router = require('express').Router();
const { Cart, Sock, Pattern, Picture, Combination, User } = require('../db/models');

router.get('/', async (req, res) => {
  let cart;
  let combination;
  try {
    
    combination = await User.findAll({
      where: {id: 1},
      include: [
        {
          model: Combination,
          as: 'UserCart',
          through: {},
          include: [
          { model: Sock, where: {id: sock_id}},
          { model: Pattern },
          { model: Picture }
          ]
        },
      ],
      raw: true
    });
    // console.log(JSON.parse(JSON.stringify(cart)));
    console.log('combination::::::::::::::', JSON.parse(JSON.stringify(combination)));
    // console.log('UserCart:::::::::::::',JSON.parse(JSON.stringify(combination[0].UserCart)));
  return res.render('cart', {combination}); // передаю в хбс полученный массив с объектами
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
// this.belongsToMany(User, {through: 'Cart', foreignKey: 'user_id', as: "UserCart"}),
// this.belongsToMany(User, {through: 'Favorite', foreignKey: 'user_id', as: "UserFavorite"}),
// this.belongsTo(Pattern, { foreignKey: 'pattern_id' }),
// this.belongsTo(Picture, { foreignKey: 'pic_id' }),
// this.belongsTo(Sock, { foreignKey: 'sock_id' })
