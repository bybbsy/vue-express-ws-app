const ChatSchema = require('../model/messages')
const RoomSchema = require('../model/room')

class ChatService {
    async sendMessage(payload, ws, wss) {
        try {
            const { room, message } = payload
            const userInRoom = await ChatSchema.findOneAndUpdate({ roomId: room._id }, { $push: { messages: message } }) 
            return userInRoom;
        } catch (e) {
            console.log(e)
        }
    }

    async findChatByRoomId(id) {
        try {
            const chat = await ChatSchema.findById(id)

            return chat;
        } catch(e) {
            throw e;
        }
    }

    async createChat(id) {
        try {
            await ChatSchema.create({
                roomId: id,
                messages: [] 
            })
        } catch(e) {
            throw e;
        }
    }

    async getChatMessages(id) {
        try {
            const chat = await ChatSchema.findOne({
                roomId: id
            })
 
            return chat;
        } catch(e) {
            console.log(e)
        }
    }


}


module.exports = new ChatService()