import React, { Component } from 'react'
import './Card.css'

import Aux from '../../../containers/Auxiliar/Auxiliar'
import BackgroundPattern from '../../../assets/images/background-pattern.png'

class Card extends Component {

    playerImageSrcHandler = () => {
        let playerImage
        if (this.props.fullPlayer) {
            const images = require.context('../../../assets/images', true);
            playerImage = images(`./p${this.props.fullPlayer.player.id}.png`);
        }
        return playerImage
    }

    teamImageSrcHandler = () => {
        let teamLogo
        if (this.props.fullPlayer) {
            const logos = require.context('../../../assets/logos', true);
            teamLogo = logos(`./${this.props.fullPlayer.player.currentTeam.id}.png`)
        }
        return teamLogo
    }

    capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }

    render() {
        let listOfStats
        if (this.props.fullPlayer) {
            listOfStats = this.props.fullPlayer.stats.map(stat => {
                return  <li className="Stat" key={stat.name}>
                            {this.capitalize(stat.name.replace('_', ' '))} <span className="StatValue">{stat.value}</span>
                        </li>
            })
        }

        return (
            <div className="Card">
                {this.props.fullPlayer ? 
                <Aux>
                    <div className="ImageContainer" style={{backgroundImage: `url(${BackgroundPattern})`}}>
                        <img className="PlayerImage" src={this.playerImageSrcHandler()} alt={this.props.fullPlayer.player.name.last}/>
                        <div className="LogoContainer">
                            <img className="TeamLogo" src={this.teamImageSrcHandler()} alt={this.props.fullPlayer.player.currentTeam.name}/>
                        </div>
                    </div>
                    <div className="StatsContainer">
                        <h2>{this.props.fullPlayer.player.name.first} {this.props.fullPlayer.player.name.last}</h2>
                        <p>{this.props.fullPlayer.player.info.positionInfo}</p>
                        <ul className="StatsList">
                            {listOfStats}
                        </ul>
                    </div>  
                </Aux>
                : null }
            </div>
        )
    }
}

export default Card