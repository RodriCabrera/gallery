import React from 'react'
import '../NavBar.css'
import { FiShoppingCart } from 'react-icons/fi';


const CartWidget = () => {
    return(
        <button className="btn"><FiShoppingCart /></button>
    )
};

export default CartWidget;