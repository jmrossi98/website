import React from 'react'
import './Blog.css'

import Cards from '../components/Cards';
import CardItem from '../components/CardItem';

function Blog() {
    return (
        <div>
            <Cards children={BlogCards()}/>
        </div>
    )
}

function BlogCards() {
    fetch('')
    return (
        <div className="cards__items">
            <CardItem 
                src=""
                text=""
                label=""
                path=""
            />
            <CardItem 
                src=""
                text=""
                label=""
                path=""
            />
            <CardItem 
                src=""
                text=""
                label=""
                path=""
            />
        </div>
    )
}

export default Blog
