const express = require('express')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')
const io = require('socket.io')(http, {
  cors: { origin: '*' },
})

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/direccion', function (req, res) {
  io.emit('message', req.body)
  res.json({ status: 'ok' })
})

io.on('connection', function (socket) {
  console.log('Usuario se conectó')

  socket.on('disconnect', function () {
    console.log('A user disconnected')
  })
})

http.listen(3000, function () {
  console.log('listening on *:3000')
})
