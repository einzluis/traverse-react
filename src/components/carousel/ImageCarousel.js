import React from 'react'
import './imagecarousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

// images
import ThePinnaclesDesert from '../../assets/the-pinnacles-desert.jpg'
import UluraAndKataTjuraNationalPark from '../../assets/ulura-&-kata-tjura-national-park.jpg'
import YarraValley from '../../assets/yarra-valley.jpg'

function ImageCarousel() {
    return (
        <div>
            <div name='carousel' className="container">
                <Carousel className='carousel' showArrows infiniteLoop autoPlay interval={2000}>
                    <div>
                        <img src={ThePinnaclesDesert} alt="/" />
                    </div>
                    <div>
                        <img src={UluraAndKataTjuraNationalPark} alt="/" />
                    </div>
                    <div>
                        <img src={YarraValley} alt="/" />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default ImageCarousel