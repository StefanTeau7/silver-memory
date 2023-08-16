'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FinancialData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      revenue: {
        type: Sequelize.DECIMAL
      },
      cashBurn: {
        type: Sequelize.DECIMAL
      },
      grossProfitPercentage: {
        type: Sequelize.DECIMAL
      },
      grossProfitDollar: {
        type: Sequelize.DECIMAL
      },
      EBITDA: {
        type: Sequelize.DECIMAL
      },
      cashOnHand: {
        type: Sequelize.DECIMAL
      },
      CAC: {
        type: Sequelize.DECIMAL
      },
      LTV: {
        type: Sequelize.DECIMAL
      },
      ACVARPU: {
        type: Sequelize.DECIMAL
      },
      customerCount: {
        type: Sequelize.INTEGER
      },
      nextFundraiseDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FinancialData');
  }
};