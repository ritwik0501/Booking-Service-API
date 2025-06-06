'use strict';
const {
  Model
} = require('sequelize');
const{SEAT_TYPE}=require("../utils/enum")
const{BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS}=SEAT_TYPE
module.exports = (sequelize, DataTypes) => {
  class seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
         this.belongsTo(models.Airplane,{
         foreignKey:'airplaneId'
      })
    }
  }
  seat.init({
    airplaneId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    col:{
      type: DataTypes.STRING,
      allowNull:false
    },
    type: {
      type:DataTypes.ENUM,
      values:[BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS],
      defaultValue:ECONOMY,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'seat',
  });
  return seat;
};