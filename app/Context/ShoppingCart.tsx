"use client";
import { createContext, useState, useEffect } from "react";

type ShoppingCartProviderProps = {
    children: React.ReactNode;
}

type CartItems = {
    id: number;
    qty: number;
}

type ShoppingCartContextType = {
    cartItems: CartItems[];
    handleIncreaseProductQty: (id : number) => void;
    handleDecreaseProductQty: (id : number) => void;
    handleRemoveProduct: (id: number) => void;
    getProductQty : (id : number) => number;
}

export const ShoppingCart = createContext<ShoppingCartContextType>({
    cartItems: [],
    handleIncreaseProductQty: () => {},
    handleDecreaseProductQty: () => {},
    handleRemoveProduct: () => {},
    getProductQty: () => 0
});

export function ShoppingCartProvider({
    children,
}: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const getProductQty = (di: number) => {
                cartItems.find(item => item.id == di)?.qty || 0
            }
        }
    }, [cartItems]);

    const handleIncreaseProductQty = (id: number) => {
        setCartItems((currentItem) => {
            let isNotProductExist = currentItem.find((item) => item.id == id) == null;

            if (isNotProductExist) {
                return [...currentItem, { id: id, qty: 1 }];
            } 
            else {
                return currentItem.map((item) => {
                    if (item.id == id) {
                        return {
                            ...item,
                            qty: item.qty + 1
                        };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const handleDecreaseProductQty = (id: number) => {
        setCartItems((currentItem) => {
            const foundItem = currentItem.find((item) => item.id === id);
            if (!foundItem) return currentItem;
            if (foundItem.qty === 1) {
                return currentItem.filter((item) => item.id !== id);
            } else {
                return currentItem.map((item) =>
                    item.id === id ? { ...item, qty: item.qty - 1 } : item
                );
            }
        });
    };

    const handleRemoveProduct = (id: number) => {
        setCartItems((currentItem) => currentItem.filter(item => item.id !== id));
    };

    function getProductQty(id: number) {
        return cartItems.find(item => item.id === id)?.qty || 0;
    }

    return (
        <ShoppingCart.Provider value={{ cartItems, handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct, getProductQty }}>
            {children}
        </ShoppingCart.Provider>
    );
}