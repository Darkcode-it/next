import { NextResponse } from 'next/server';

export async function GET() {
    const products = [
        {
            id: 1,
            img: "/img/product (1).jpg",
            title: "Product 1",
            discription: "This is product 1",
            price: 99.99
        },
        {
            id: 2,
            img: "/img/product (2).jpg",
            title: "Product 2",
            discription: "This is product 2",
            price: 149.99
        },
        {
            id: 3,
            img: "/img/product (3).jpg",
            title: "Product 3",
            discription: "This is product 1",
            price: 99.99
        },
        {
            id: 4,
            img: "/img/product (4).jpg",
            title: "Product 4",
            discription: "This is product 1",
            price: 99.99
        },
    ];

    return NextResponse.json(products);
} 