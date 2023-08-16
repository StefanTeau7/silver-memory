'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};
const Company = require('./models/companies');
const CompanyDataEntry = require('./models/company_data_entries');
const User = require('./models/users');
const MetricType = require('./models/metric_types');
const MetricRaw = require('./models/metrics_raw');
const SourceType = require('./models/source_types');

Company.hasMany(CompanyDataEntry, { foreignKey: 'companies_id' });
User.hasMany(CompanyDataEntry, { foreignKey: 'users_id' });
CompanyDataEntry.belongsTo(Company, { foreignKey: 'companies_id' });
CompanyDataEntry.belongsTo(User, { foreignKey: 'users_id' });
CompanyDataEntry.belongsTo(SourceType, { foreignKey: 'source_types_id' });
CompanyDataEntry.hasMany(MetricRaw, { foreignKey: 'company_data_entries_id' });
MetricType.hasMany(MetricRaw, { foreignKey: 'metric_types_id' });


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
sequelize.sync()
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
