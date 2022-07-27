const { Schema, model } = require('mongoose')

const UserChema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})

module.exports = model('user', UserChema)