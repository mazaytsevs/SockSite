const router = require('express').Router();
const { Cart } = require('../db/models');

router.get('/', async (req, res) => {
  let carts;
  try {
    // carts = await Cart.findAll({
    //   // include: [{
    //   //   model: User
    //   // }]
    // })
    carts = await Cart.findAll(); // объединяю таблицу Ентри и Юзер и отбрасываю лишнее
    console.log(JSON.parse(JSON.stringify(carts)));
  // return res.render('carts/index', { carts }); // передаю в хбс полученный массив с объектами
  } catch (error) {
    // return res.render('error', {
    //   message: 'Не удалось получить записи из базы данных.',
    //   error: {}
    // });
    console.log('error');
  }
});


