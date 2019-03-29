const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("trustply", "behruz", "f6Zhwv4qK2NsM9Pc", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db