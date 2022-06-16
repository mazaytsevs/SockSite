const { Cart, Sock, Pattern, Picture, Combination, User } = require('../db/models');

User.findOne({
  where: {id: 1},
  include: [
    {
      model: Combination,
      as: 'UserCart',
      include: [ {model: Sock}, {model: Pattern}, {model: Picture} ]
    },
  ],
  // raw: true

}).then(res => console.log(JSON.parse(JSON.stringify(res))))
