const { Schema, model } = require('mongoose')

const MessagesSchema = new Schema({
    roomId: { type: Schema.Types.ObjectId },
    messages: [
        {
            author: {
                type: string, required: true
            },
            dateSent: {
                type: string, required: true
            },
            text: {
                type: string, required: true
            }
        }
    ]
})

module.exports = model('messages', MessagesSchema)