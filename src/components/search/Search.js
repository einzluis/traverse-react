import React from 'react'
import './search.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>BOOK NOW FOR A PERFECT HOLIDAY!</h2>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, nihil? Facilis nesciunt expedita ipsum corrupti dolorem praesentium quos. Incidunt explicabo assumenda cupiditate corrupti nulla voluptatum officiis! A dolore aliquam totam.
                    Cum eos voluptatibus illum nisi quidem doloremque aspernatur vitae repudiandae obcaecati possimus ut asperiores sed, blanditiis placeat corrupti molestiae ipsa id eum provident. Cumque minima alias quidem! Vitae, facilis natus.
                    Fugiat vitae aspernatur esse odio, non cum ex dolor ullam a ipsum quisquam maxime qui quos, voluptatem doloribus itaque pariatur. Nemo a magni omnis accusamus est iusto accusantium, neque labore? 
                    </p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{marginRight: '1rem'}} />
                            </div>
                            <div>
                                <h3>WORLD'S LEADING</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NO ONE INCLUDES MORE</h3>
                                <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW</p>
                                <button>View packages</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GET AN ADDITIONAL 7% OFF</h4>
                        <p className="timer">12 HOURS LEFT</p>
                        <p className="offers">VIEW ALL CURRENT OFFERS</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">Grande Antique</option>
                                <option value="2">Grenada</option>
                                <option value="3">Emerald Bay</option>
                                <option value="4">Bora Bora</option>
                                <option value="5">Key West</option>
                                <option value="6">Maldives</option>
                                <option value="7">Barbados</option>
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