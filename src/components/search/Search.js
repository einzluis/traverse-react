import React from 'react'
import './search.css'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>BOOK NOW FOR A PERFECT HOLIDAY!</h2>
                    <br />
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, nihil? Facilis nesciunt expedita ipsum corrupti dolorem praesentium quos. Incidunt explicabo assumenda cupiditate corrupti nulla voluptatum officiis! A dolore aliquam totam.
                    Cum eos voluptatibus illum nisi quidem doloremque aspernatur vitae repudiandae obcaecati possimus ut asperiores sed, blanditiis placeat corrupti molestiae ipsa id eum provident. Cumque minima alias quidem! Vitae, facilis natus.
                    Fugiat vitae aspernatur esse odio, non cum ex dolor ullam a ipsum quisquam maxime qui quos, voluptatem doloribus itaque pariatur. Nemo a magni omnis accusamus est iusto accusantium, neque labore? 
                    </p>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET UP TO 50% OFF!</h4>
                        <p className="timer">5 HOURS LEFT</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Leura</option>
                                <option value="2">Matilda Bay Reserve</option>
                                <option value="3">Sydney Opera House</option>
                                <option value="4">The Pinnacles Desert</option>
                                <option value="5">Ulura and Kata Tjura National Park</option>
                                <option value="6">Yarra Valley</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-in</label>
                                <input type="date"/>
                            </div>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-out</label>
                                <input type="date"/>
                            </div>
                        </div>
                        <button>Rates and Availability</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Search