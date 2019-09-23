const players = (app, fs) => {
    let dataPath = './data/player-stats.json'

    // Refactored helper methods
    const readFile = (callback, returnJson = false, filePath = dataPath, encoding = 'utf8') => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) throw err
            
            callback(returnJson ? JSON.parse(data) : data)
        })
    }

    const writeFile = (fileData, callback, filePath = dataPath, encoding = 'utf8') => {
        fs.writeFile(filePath, fileData, encoding, err => {
            if (err) throw err

            callback()
        })
    }

    // READ
    app.get('/players', (req, res) => {

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) throw err

            let playersData = JSON.parse(data)
            res.send(playersData.players)
        })
    })

    // CREATE
    app.post('/players/:id', (req, res) => {
        readFile(data => {
            const newPlayerId = Object.keys(data).length + 1

            data[newPlayerId] = JSON.parse(req.body.data)

            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send('New Player added')
            })
        }, true)
    })

    // UPDATE
    app.put('/players/:id', (req, res) => {
        // Add New Player
        const playerId = req.params["id"]
        data[playerId] = JSON.parse(req.body.data)

        writeFile(JSON.stringify(data, null, 2), () => {
            res.status(200).send(`Players id: ${playerId} updated`)
        }, true)
    })

    // DELETE
    app.delete('/players/:id', (req, res) => {
        readFile(data => {
            // Delete player 
            const playerId = req.params["id"]
            delete data[playerId]
    
            writeFile(JSON.stringify(data, null, 2), () => {
                res.status(200).send(`Players id: ${playerId} removed`)
            })
        }, true)
    })
}

module.exports = players