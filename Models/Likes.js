const Sequelize = require('sequelize');
const connection = require('../sql')

const Likes = connection.define('Likes', {
    idUsername: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idPhoto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }
  })

module.exports = Likes