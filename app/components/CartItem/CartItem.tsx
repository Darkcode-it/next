'use client';

import { useContext } from "react";
import AddToCart from "../AddToCart/AddToCart";
import { ShoppingCart } from "../../Context/ShoppingCart";

type CartItemProps = {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

export default function CartItem({ id, title, description, price, image }: CartItemProps) {
    const { handleRemoveProduct } = useContext(ShoppingCart);
    return (
        <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-lg">
            <img
                className="w-24 h-24 object-cover rounded-md"
                src={image}
                alt={title}
            />
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-green-600 font-semibold">${price.toFixed(2)}</div>
                    <AddToCart id={id.toString()}/>
                </div>
            </div>
            <button className="text-red-500 hover:text-red-700 transition-colors" onClick={() => handleRemoveProduct(id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                </svg>
            </button>
        </div>
    )
}