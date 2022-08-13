import React from 'react'
import './selected.css'

function Selected(props) {
    return (
        <div className='selects-location'>
            <img src={props.img} alt='/' />
            <div className="overlay">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Selected