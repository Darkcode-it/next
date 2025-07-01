"use client";
import { useContext, useEffect, useState } from "react";
import { ShoppingCart } from "../Context/ShoppingCart";
import CartItem from "../components/CartItem/CartItem";

// Product type
interface Product {
    id: number;
    img: string;
    title: string;
    description: string;
    price: number;
}

export default function Cart() {
    const { cartItems } = useContext(ShoppingCart);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    // Merge cartItems with product details
    const cartWithDetails = cartItems.map((cartItem) => {
        const product = products.find((p) => p.id === cartItem.id);
        return product ? { ...product, qty: cartItem.qty } : null;
    }).filter(Boolean) as (Product & { qty: number })[];

    const total = cartWithDetails.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
                    <a
                        href="/store"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        Continue Shopping
                    </a>
                </div>
                <div className="space-y-4">
                    {cartWithDetails.length === 0 ? (
                        <div className="text-gray-500">Your cart is empty.</div>
                    ) : (
                        cartWithDetails.map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.img}
                            />
                        ))
                    )}
                </div>
                <div className="mt-8 border-t pt-6">
                    <div className="flex justify-between items-center">
                        <div className="text-lg font-semibold">Total:</div>
                        <div className="text-xl font-bold text-green-600">${total.toFixed(2)}</div>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}