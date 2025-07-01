import { NextPage } from 'next';
import Product from '../components/product/Product';
import Link from 'next/link';

interface IProductItemProps {
    id: number;
    img: string;
    title: string;
    discription: string;
    price: number;
}

export default async function Store() {
    try {
        const result = await fetch("http://localhost:3000/api/products", {
            cache: 'no-store'
        });

        if (!result.ok) {
            throw new Error('Failed to fetch products');
        }

        const data = await result.json() as IProductItemProps[];

        return (
            <main className="container mx-auto">
                <h1 className='py-5'>store</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-2'>
                    {data.map((item) => (
                        <Link key={item.id} href={`/store/${item.id}`}>
                            <Product {...item} />
                        </Link>
                    ))}
                </div>
            </main>
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return (
            <main className="container mx-auto">
                <h1 className='py-5'>store</h1>
                <p>Failed to load products. Please try again later.</p>
            </main>
        );
    }
}

