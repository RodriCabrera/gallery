import React from 'react'
import {IoAddCircleOutline} from 'react-icons/io5'
import {IoRemoveCircleOutline} from 'react-icons/io5'
import { useState } from 'react'


const ItemCount = () => {
    const [count, setCount] = useState(1)
    const [stock] = useState(12)
    const addItem = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }
    return (
        <div className="itemContainer">
            <IoAddCircleOutline onClick={() => addItem()}/>
            <p>{count}</p>
            <IoRemoveCircleOutline onClick={() => setCount(Math.max(count - 1, 0))}/>
            <button >Add to cart</button>
        </div>
    )
}

export default ItemCount