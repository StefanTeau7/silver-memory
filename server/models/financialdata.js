'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FinancialData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FinancialData.init({
    companyId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    revenue: DataTypes.DECIMAL,
    cashBurn: DataTypes.DECIMAL,
    grossProfitPercentage: DataTypes.DECIMAL,
    grossProfitDollar: DataTypes.DECIMAL,
    EBITDA: DataTypes.DECIMAL,
    cashOnHand: DataTypes.DECIMAL,
    CAC: DataTypes.DECIMAL,
    LTV: DataTypes.DECIMAL,
    ACVARPU: DataTypes.DECIMAL,
    customerCount: DataTypes.INTEGER,
    nextFundraiseDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'FinancialData',
  });
  return FinancialData;
};