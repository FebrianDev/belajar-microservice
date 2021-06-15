const sequelize = require('sequelize')

const db = new sequelize('element-battle', 'root', '',{
    dialect:'mysql'
})

module.exports = db