const Likes = require('../Models/Likes.js')

const getUserLikes = (req, res) => {
    const idUsername = req.params.idUsername
    Likes
        .findAll({where: {idUsername} })
        .then(resp => res.json({response: resp}) )
}

const postUserLikes = (req, res) => {
    const { idUsername, idPhoto, url } = req.body
    Likes
        .create({ idUsername, idPhoto, url })
        .then( resp => res.json({response: 'Created!'}) )
}

module.exports = {
    getUserLikes,
    postUserLikes
}