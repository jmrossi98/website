import './Cards.css'
import React from 'react'

function Cards(props) {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">{props.children}</div>
            </div>
        </div>
    )
}

export default Cards
