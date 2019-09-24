import React, { Component } from 'react'

class Card extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name} {this.props.surname}</h1>
            </div>
        )
    }
}

export default Card