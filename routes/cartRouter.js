const router = require('express').Router();
const { Cart, Sock, Pattern, Picture, Combination, User } = require('../db/models');

router.get('/', async (req, res) => {
  let combination;
  try {
    
    combination = await User.findOne({
      where: {id: 1},
      include: [
        {
          model: Combination,
          as: 'UserCart',
          include: [{model: Sock}, {model: Pattern}, {model: Picture} ]
        },
      ],
      // raw: true
      
        // console.log('combination::::::::::::::', JSON.parse(JSON.stringify(combination.UserCart[0])));
        console.log('combination: ', combination);
        console.log('UserCart:::::::::::::',JSON.parse(JSON.stringify(combination.dataValues.UserCart)));
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
