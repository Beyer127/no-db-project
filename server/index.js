const express = require('express')
const playerCtrl = require('./controlers/playerControler')
const app = express()
const port = 4127

app.use(express.json())

app.get('/api/player', playerCtrl.getPlayer)
app.post('/api/newPlayer', playerCtrl.addPlayer)
app.delete('/api/deletePlayer/:id', playerCtrl.deletePlayer)
app.put('/api/editPlayer/:id', playerCtrl.editPlayer)

app.listen(port, console.log(`listening on port ${port}`))