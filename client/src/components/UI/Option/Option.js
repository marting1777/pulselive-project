import React from 'react'

const option = props => {
    return (
        <option id={props.id} value={props.value}>
            {props.children}
        </option>
    )
}

export default option