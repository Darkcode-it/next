"use client"

import { useContext } from "react"
import { ShoppingCart } from "../../Context/ShoppingCart"

interface IAddToCartProps {
    id: string
}

export default function AddToCart({id}:IAddToCartProps) {
    const { getProductQty, handleIncreaseProductQty, handleDecreaseProductQty } = useContext(ShoppingCart)
    const qty = getProductQty(parseInt(id))
    return (
        <div>
            <div className="flex items-center gap-2">
                <button onClick={() => handleDecreaseProductQty(parseInt(id))} 
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    -
                </button>
                <span className="w-8 text-center">{qty}</span>
                <button onClick={() => handleIncreaseProductQty(parseInt(id))} 
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    +
                </button>
            </div>
        </div>
    )
}