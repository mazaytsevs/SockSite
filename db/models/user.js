'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { Combination }) {
      // define association here
      this.belongsToMany(Combination, {through: 'Cart', foreignKey: 'user_id', as: "UserCart"}),
      this.belongsToMany(Combination, {through: 'Favorite', foreignKey: 'user_id', as: "UserFavorite"})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
