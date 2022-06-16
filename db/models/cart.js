'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.User, {foreignKey: 'user_id'})
      // this.belongsTo(models.Combination, {foreignKey: 'comb_id'})
    }
  }
  Cart.init({
    user_id: DataTypes.INTEGER,
    comb_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
