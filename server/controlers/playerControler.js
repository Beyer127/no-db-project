const players = require('../todos.json')
let nextId = 5

module.exports = {
    getPlayer: (req,res) => {
        return res.status(200).send(players)
    },
      addPlayer: (req,res) => {
            const {name, img, nickName} = req.body

                const addPlayer = {
                    id: nextId,
                    name,
                    img,
                    nickName
                }
                nextId++
                players.push(addPlayer)
                res.status(200).send(players)
            
        },
        editPlayer: (req,res) => {
            const {id} = req.params
            const {nickName} = req.body
            console.log(id, nickName)
            const index = players.findIndex((player) => {
            return player.id === +id    
            })
            players[index].nickName = nickName
            res.status(200).send(players)
        },
        deletePlayer: (req,res) => {
            const {id} = req.params
            const index = players.findIndex((player) => {
             return player.id === +id
            })
            players.splice(index, 1)
            res.status(200).send(players)
        }
}