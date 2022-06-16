'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Combination extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { User, Pattern, Picture, Sock, Cart }) {
      // define association here
      this.hasMany(Cart, {foreignKey: 'comb_id'})

      this.belongsToMany(User, {through: 'Cart', foreignKey: 'comb_id', as: "UserCart"}),
      this.belongsToMany(User, {through: 'Favorite', foreignKey: 'comb_id', as: "UserFavorite"}),
      this.belongsTo(Pattern, { foreignKey: 'pattern_id' }),
      this.belongsTo(Picture, { foreignKey: 'pic_id' }),
      this.belongsTo(Sock, { foreignKey: 'sock_id' })
    }
  }
  Combination.init({
    sock_id: DataTypes.INTEGER,
    pattern_id: DataTypes.INTEGER,
    pic_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Combination',
  });
  return Combination;
};
