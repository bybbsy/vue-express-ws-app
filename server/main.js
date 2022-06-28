const express = require('express')
const { WebSocketServer, WebSocket } = require('ws')
const { createServer } = require('http')

const app = express()
const server = createServer(app)

const wss = new WebSocketServer({ server })

const messages = []

wss.on('connection', (ws) => {
    ws.on('message', (msg) => {
        messages.push(msg.toString())
        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ messages }))
            }
        })
    })
    ws.send(JSON.stringify({ messages }))
})

server.listen(6100, () => {
    console.log('listeing on 6100 port')
})