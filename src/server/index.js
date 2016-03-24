import http from 'http'
import express from 'express'
import socketio from 'socket.io'
import api from 'src/server/api'
import mongoose from 'mongoose'

const app = express()
const server = http.createServer(app)
const io = socketio(server)
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/tvify')

app.use(express.static('public'))

app.use('/api', api)

io.on('connection', (socket) => {
  console.log(`Connecte ${socket.id}`)

  socket.on('ping', () => socket.emit('pong'))
})

server.listen(port, () => console.log(`Servidor iniciado. Escuchando en el puerto ${port}`))
