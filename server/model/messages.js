const { Schema, model } = require('mongoose')

const ChatSchema = new Schema({
    roomId: { type: Schema.Types.ObjectId },
    messages: [
        {
            authorName: {
                type: String, required: true
            },
            authorId: {
                type: Schema.Types.ObjectId, required: true
            },
            dateSent: {
                type: Schema.Types.Date, required: true
            },
            text: {
                type: String, required: true
            }
        }
    ]
})

module.exports = model('chat', ChatSchema)