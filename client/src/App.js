import React, { Component } from 'react'
import './App.css'

import Option from './components/UI/Option/Option'
import Card from './components/UI/Card/Card'

class App extends Component {

    state = {
        response: '',
        players: '',
        option: '',
        card: '',
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
        this.setState({ card: body[0] })
        this.createPlayersHandler()
    }

    onOptionChange = event => {
        let playerSelected = event.target.value
        this.setState({ option: playerSelected })

        let cardsList = this.state.response
        let selectedCard
        let playerSelectedId = parseInt(playerSelected, 10)
        cardsList.forEach(card => {
            if (card && card.player && playerSelectedId) {
                if (card.player.id === playerSelectedId) {
                    selectedCard = card
                }
            }
        })
        this.setState({ card: selectedCard })
    }

    createPlayersHandler = () => {
        const playersData = this.state.response.map(players => {
            return <Option 
                        key={players.player.id} 
                        value={players.player.id}>
                            {players.player.name.first} {players.player.name.last}
                    </Option>
        })
        return this.setState({ players: playersData })
    }

    render() {

        return (
            <div className="App">
                <section className="CardArea">
                    <div className="FormSelect">
                        <select className="SelectPlayer" onChange={this.onOptionChange}>
                            <option value="Select a Player...">Select a Player...</option>
                            {this.state.players}
                        </select>
                    </div>

                    <Card fullPlayer={this.state.card}/>
                </section>
            </div>
        )
    }
}

export default App
 