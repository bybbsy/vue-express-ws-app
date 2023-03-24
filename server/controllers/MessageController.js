const roomSchema = require('../model/room')
const { WebSocket } = require('ws')
const ChatService = require('../services/chat.service')

class MessageController {
  constructor () {}

  async createRoom (room, ws, wss) {
    try {

      console.log(room)
      const newRoom = new roomSchema(room)

      await newRoom.save()

      await ChatService.createChat(newRoom.id)

      this.sendRoomsAndChat({room}, ws, wss)
    } catch (e) {
      console.log(e)
    }
  }

  async joinRoom (payload, ws, wss) { 
    try {
      const { room, username } = payload
      const roomInDb = await roomSchema.findById(room._id)

      const userInRoom = roomInDb.users.some(user => user == username)
      const isNotFull = roomInDb.users.length < roomInDb.size

      if (!userInRoom && isNotFull) {
        roomInDb.users.push(username)
        await roomInDb.save()
      }

      this.sendRoomsAndChat(payload, ws, wss)

    } catch (e) {
      console.log(e)
    }
  }

  async leaveRoom (payload, ws, wss) {
    try {
      const { room, username } = payload

      const roomInDb = await roomSchema.findById(room._id)

      const userInRoom = roomInDb.users.filter(user => user === username)

      if (userInRoom) {
        const updatedRoom = roomInDb.users.filter(user => user !== username)
        roomInDb.users = updatedRoom
        await roomInDb.save()
      }

      this.sendRooms(ws, wss)

    } catch (e) {
      console.log(e)
    }
  }

  async sendRooms (ws, wss) {
    try {
      const rooms = await roomSchema.find()

      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ rooms }))
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  async sendChat(payload, ws, wss) {
    try {
      const { _id } = payload.room; 
      const chatMessages = await ChatService.getChatMessages(_id)
      console.log(chatMessages)
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ chatMessages }))
        }
      })

    } catch (e) {
      console.log(e)
    }
  }

  async sendRoomsAndChat(payload, ws, wss) {
    try {
      const rooms = await roomSchema.find()
      const { _id } = payload.room; 
      const chatMessages = await ChatService.getChatMessages(_id)
 
      wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ rooms, chatMessages }))
        }
      })

      // ws.send(JSON.stringify({ rooms, chatMessages }))
    } catch (e) {
      console.log(e)
    }
  }

  async sendMessage(payload, ws, wss) {
    try {
      ChatService.sendMessage(payload, ws, wss)

      this.sendRoomsAndChat(payload, ws, wss)
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new MessageController()
