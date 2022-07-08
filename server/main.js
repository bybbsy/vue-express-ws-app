require('dotenv').config()

const {
    MONGO_APP,
    MONGO_DB,
    MONGO_NICK,
    MONGO_PW
} = process.env

console.log(MONGO_NICK)
const express = require('express')
const { WebSocketServer, WebSocket } = require('ws')
const { createServer } = require('http')
const app = express()
const server = createServer(app)
const wss = new WebSocketServer({ server })
const mongoose = require('mongoose')
const messages = []


const roomSchema = require('./model/room')

mongoose.connect(`mongodb+srv://${MONGO_NICK}:${MONGO_PW}@${MONGO_APP}.6kddvz6.mongodb.net/${MONGO_DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => console.error(err))


wss.on('connection', async (ws) => {
    ws.on('message', async (msg) => {
        const message = JSON.parse(msg)
        const actionType = message.action;
        console.log(actionType)

        const room = message.payload 

        console.log(room)

        const newRoom = new roomSchema(room)
        await newRoom.save()

        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN) {
                
                client.send(JSON.stringify({ messages }))
            }
        })
    })

    const rooms = await roomSchema.find()
    ws.send(JSON.stringify({ rooms })) 
})

server.listen(6100, async () => {
    console.log('listeing on 6100 port')
})