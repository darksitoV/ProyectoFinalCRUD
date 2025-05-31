const Sequelize = require('sequelize')

const sequelize = new Sequelize ({
    dialect: 'sqlite',
    storage: './citas.sqlite'
})

module.exports = sequelize;