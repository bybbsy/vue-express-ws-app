require('dotenv')

const {
    MONGO_APP,
    MONGO_DB,
    MONGO_NICK,
    MONGO_PW
} = process.env

const express = require('express')
const { WebSocketServer, WebSocket } = require('ws')
const { createServer } = require('http')
const app = express()
const server = createServer(app)
const wss = new WebSocketServer({ server })
const mongoose = require('mongoose')
const messages = []

mongoose.connect(`mongodb+srv://${MONGO_NICK}:${MONGO_PW}@${MONGO_APP}.6kddvz6.mongodb.net/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => console.error(err))


wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        const room = JSON.parse(msg)
        room.users = 0

        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ messages }))
            }
        })
    })
    ws.send(JSON.stringify({ messages }))
})

server.listen(6100, async () => {
    console.log('listeing on 6100 port')
})