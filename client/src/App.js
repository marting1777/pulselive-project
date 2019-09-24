import React, { Component } from 'react'
import './App.css'

import Option from './components/UI/Option/Option'

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
            return <Option key={players.player.id} value={players.player.id}>{players.player.name.first} {players.player.name.last}</Option>
        })
        return this.setState({ players: playersData })
    }

    render() {

        return (
            <div className="App">
                <section className="CardArea">
                    <div className="FormSelect">
                        <select>
                            <option value="Select a Player...">Select a Player...</option>
                            {this.state.players}
                        </select>
                    </div>
                </section>
            </div>
        )
    }
}

export default App
 