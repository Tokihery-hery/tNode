const mongoose = require('mongoose')

let postUser = mongoose.model('user', {
    name: { type: String },
    mail: { type: String },
    password: { type: String }
}, 'user')

module.exports = { postUser }