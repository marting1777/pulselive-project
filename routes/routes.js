const players = require('./players')

const appRouter = (app, fs) => {

    app.get('/', (req, res) => {
        res.send('Welcome to the API-Server')
    })

    players(app, fs)
}

module.exports = appRouter