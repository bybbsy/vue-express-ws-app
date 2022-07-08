const { Schema, model } = require('mongoose')
const UserSchema = require('../model/user')

const RoomSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    users: {
        type: [UserSchema],
        default: []
    }
})

module.exports = model("room", RoomSchema)