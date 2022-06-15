'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { Combination }) {
    // define association here
    this.hasMany(Combination, { foreignKey: 'sock_id' })
  }

  }
  Sock.init({
    color: DataTypes.STRING,
    hex: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
