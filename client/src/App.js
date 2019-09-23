import React, { Component } from 'react'
import './App.css'

import Card from './components/UI/Card/Card'

class App extends Component {

    state = {
        response: '',
        players: ''
    }

    componentDidMount() {
        this.callApi()
            .then(res => this.setState({response: res.express}))
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('/players')
        const body = await response.json()
        if (response.status !== 200) throw Error(body.message)
        this.setState({ response: body })
        
        this.createPlayersHandler()
    }

    createPlayersHandler = () => {
        const playersData = this.state.response.map(players => {
            return <Card 
                        key={players.player.id} 
                        player={players.player.name.first}/>
        })
        return this.setState({ players: playersData })
    }

    render() {

        return (
            <div className="App">
                {this.state.players}
            </div>
        )
    }
}

export default App
 