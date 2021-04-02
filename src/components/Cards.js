import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check Out the EPIC Destinations!</h1>
            <div className="card__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/img-9.jpg"
                        text="kjksdf jksdfjkhsdkjf jkshdfohsjdkf"
                        label="Adventure"
                        path='/inventory'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
