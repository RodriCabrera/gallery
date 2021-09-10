import React from 'react'
import "./Card.css"
import ItemCount from "../../components/ItemCount/ItemCount";


const Card = ({name = "card name", price = "$$$"}) => {
    return (
        <div className="card">
            <img className="card-img" src="https://www.agora-gallery.com/advice/wp-content/uploads/2015/10/image-placeholder.png" alt=""/>
            <h4 className="card-name">{name}</h4>
            <h5 className="card-price">{price}</h5>
            <ItemCount />
        </div>
    )
}

export default Card
