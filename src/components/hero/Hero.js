import React from 'react'
import './hero.css'

import Video from '../../assets/stock-footage.mp4'
import { AiOutlineSearch } from 'react-icons/ai'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className="overlay"></div>
            <div className="content">
                <h2>Cheap flights</h2>
                <h1>Anywhere in Australia!</h1>
                <form className="form">
                    <div>
                        <input type="text" placeholder='Search destinations..'/>
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero