export interface IProductItemProps{
    id: number,
    img:string,
    title: string,
    discription: string,
    price:number
}


export default function Product({img,title,price,discription}: IProductItemProps) {
    return (
        <div className='flex flex-col shadow-md rounded-2xl overflow-hidden'>
            <img className='w-full h-48 object-cover' src={img} alt={title} />
            <div className='p-4'>
                <h1 className='text-lg font-semibold mb-2'>{title}</h1>
                <h5>{discription}</h5>
                <p className='text-gray-600'>price: <span className='text-green-600 font-medium'>${price}</span></p>
                {/* <p className='text-gray-600 mt-1'>اینجا</p> */}
            </div>
        </div>
    )
}