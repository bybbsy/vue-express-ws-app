const roomSchema = require('../model/room')
const { WebSocket } = require('ws')

class MessageController {
  constructor () {}

  async createRoom (room, ws, wss) {
    try {
      console.log('Create func')
      const newRoom = new roomSchema(room)

      await newRoom.save()

      this.sendRooms(ws, wss)
    } catch (e) {
      console.log(e)
    }
  }

  async joinRoom (payload, ws, wss) {
    console.log('here')
    try {
      const { room, username } = payload

      const roomInDb = await roomSchema.findById(room._id)

      const userInRoom = !!roomInDb.users.some(user => user !== username)

      if (!userInRoom) {
        roomInDb.users.push(username)
        await roomInDb.save()
      }

      this.sendRooms(ws, wss)
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
          ws.send(JSON.stringify({ rooms }))
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = new MessageController()
