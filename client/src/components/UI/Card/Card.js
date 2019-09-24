import React, { Component } from 'react'
import './Card.css'

import Aux from '../../../containers/Auxiliar/Auxiliar'

class Card extends Component {

    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="Card">
                {this.props.fullPlayer ? 
                <Aux>
                    <div className="ImageContainer">
                        <img />
                    </div>
                    <div className="StatsContainer">
                
                        <h2>{this.props.fullPlayer.player.name.first}</h2>
                        <p>Defender</p>
                        <img className="TeamLogo"/>
                        <ul className="StatsList">
                            <li className="Stat">Appearances <span className="StatValue">80</span></li>
                            <li className="Stat">Goals <span className="StatValue">5</span></li>
                            <li className="Stat">Assits <span className="StatValue">2</span></li>
                            <li className="Stat">Goals per match <span className="StatValue">0.06</span></li>
                            <li className="Stat">Passes per minute <span className="StatValue">0.26</span></li>
                        </ul>
                    </div>  
                </Aux>
                : <p>Select A Player to Be Rendered</p> }
            </div>
        )
    }
}

export default Card