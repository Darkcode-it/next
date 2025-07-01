import { LuShoppingCart } from "react-icons/lu";
import AddToCart from '../../components/AddToCart/AddToCart';



interface IProductItemProps {
    id: number;
    img: string;
    title: string;
    discription: string;
    price: number;
}

export default async function Product({ params }: { params: { id: string } }) {
    try {
        const result = await fetch(`http://localhost:3000/api/products/${params.id}`, {
            cache: 'no-store'
        });

        if (!result.ok) {
            throw new Error('Failed to fetch product');
        }

        const data = await result.json() as IProductItemProps;

        return (
            <div className='container mx-auto px-4'>
                <div className='flex flex-col shadow-md rounded-2xl overflow-hidden mt-20 max-w-2xl mx-auto'>
                    <img className='w-full h-[400px] object-cover' src={data.img} alt={data.title} />
                    <div className='p-6'>
                        <h1 className='text-2xl font-semibold mb-4'>{data.title}</h1>
                        <div className='text-gray-600 mb-4'>{data.discription}</div>
                        <p className='text-xl text-gray-600'>
                            Price: <span className='text-green-600 font-medium'>${data.price}</span>
                        </p>
                        <div className='flex items-center gap-4 mt-4'>
                            <LuShoppingCart size="2rem" color="#155DFC" />
                            <AddToCart id={data.id.toString()} />
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching product:', error);
        return (
            <div className='container mx-auto px-4 mt-20'>
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold text-red-600'>Product Not Found</h1>
                    <p className='mt-4'>Sorry, we couldn't find the product you're looking for.</p>

                </div>
            </div>
        );
    }
}