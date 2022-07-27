require('dotenv').config()
const { MONGO_APP, MONGO_DB, MONGO_NICK, MONGO_PW } = process.env

const express = require('express')
const { WebSocketServer } = require('ws')
const { createServer } = require('http')
const app = express()
const server = createServer(app)
const wss = new WebSocketServer({ server })
const mongoose = require('mongoose')

const MessageController = require('./controllers/MessageController')

mongoose
  .connect(
    `mongodb+srv://${MONGO_NICK}:${MONGO_PW}@${MONGO_APP}.6kddvz6.mongodb.net/${MONGO_DB}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch(err => console.error(err))

wss.on('connection', async ws => {
  try {
    await MessageController.sendRooms(ws, wss)

    ws.on('message', async msg => { 
      try {
        const message = JSON.parse(msg) 
        const actionType = message.action

        switch (actionType) {
          case 'join-room':
            MessageController.joinRoom(message.payload, ws, wss)
            break
          case 'create-room':
            MessageController.createRoom(message.payload, ws, wss)
            break
					case 'leave-room':
						MessageController.leaveRoom(message.payload, ws, wss)
						break
          case 'send-message':
            MessageController.sendMessage(message.payload, ws, wss)
            break
          case 'receive-chat':
            MessageController.sendChat(message.payload, ws, wss)
            break
          case 'receive-rooms':
            MessageController.sendRooms(ws, wss)
            break
        }
      } catch (e) {
        console.log('Error: ' + e)
      }
    })
  } catch (e) {
    console.log('Err: ' + e)
  }
})

server.listen(6100, async () => {
  console.log('listeing on 6100 port')
})


// TODO Add WebRTC