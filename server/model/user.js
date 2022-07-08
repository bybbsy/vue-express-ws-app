const { Schema, model } = require('mongoose')

const UserChema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    users: { type: Array }
})

module.exports = model('user', UserChema)