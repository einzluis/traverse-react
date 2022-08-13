import React from 'react'
import './selects.css'

// images
import Leura from '../../assets/leura.jpg'
import MatildaBayReserve from '../../assets/matilda-bay-reserve.jpg'
import SydneyOperaHouse from '../../assets/sydney-opera-house.jpg'
import ThePinnaclesDesert from '../../assets/the-pinnacles-desert.jpg'
import UluraAndKataTjuraNationalPark from '../../assets/ulura-&-kata-tjura-national-park.jpg'
import YarraValley from '../../assets/yarra-valley.jpg'

import Selected from '../selected/Selected'


function Selects() {
    return (
        <div name='views' className="selects">
            <div className="container">
                <Selected img={Leura} text='Leura' />
                <Selected img={MatildaBayReserve} text='Matilda Bay Reserve' />
                <Selected img={SydneyOperaHouse} text='Sydney Opera House' />
                <Selected img={ThePinnaclesDesert} text='The Pinnacles Desert' />
                <Selected img={UluraAndKataTjuraNationalPark} text='Ulura and Kata Tjura National Park' />
                <Selected img={YarraValley} text='Yarra Valley' />
            </div>
        </div>
    )
}

export default Selects