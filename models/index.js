const Sequelize = require('sequelize');
const config = require('../config.json')[process.env.NODE_ENV || 'development'];
console.log('config',config,process.env.NODE_ENV);
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const DataTypes = Sequelize.DataTypes;
const User = require('./user')(sequelize, DataTypes);


const db = {};

db.User = User;
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Here you can import and add models to the db object
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
