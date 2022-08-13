import React from 'react'
import './destinations.css'

// images
import d1 from '../../assets/d1.jpg'
import d2 from '../../assets/d2.jpg'
import d3 from '../../assets/d3.jpg'
import d4 from '../../assets/d4.jpg'
import d5 from '../../assets/d5.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h2>Land Down Under's</h2>
                <h1>All-Inclusive Resorts</h1>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={d1} alt="/" />
                    <img src={d2} alt="/" />
                    <img src={d3} alt="/" />
                    <img src={d4} alt="/" />
                    <img src={d5} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Destinations