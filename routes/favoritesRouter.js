const router = require('express').Router();
const { Cart, Sock, Pattern, Picture, Combination, User } = require('../db/models');

router.get('/', async (req, res) => {
  let favorite;
  try {
    favorite = await Combination.findAll({
      // where: {
      //   id: 1, // подставить полученного юзера
      // },
      include: [
        { model: Sock }, { model: Pattern }, { model: Picture }
      ],
      raw: true
    });;
    console.log('favorite::::::::::::::', JSON.parse(JSON.stringify(favorite)));
  return res.render('favorites', {favorite}); // передаю в хбс полученный массив с объектами
  } catch (error) {
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {}
    // });
    console.log(error);
  }
});

module.exports = router;
