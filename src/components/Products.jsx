import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {

    const dispatch = useDispatch();
    //renaming data as products
    const {data: products, status} = useSelector(state => state.product)

    // const [products, setProducts] = useState([]);
    useEffect(() => {

        dispatch(fetchProducts());
        
    //   const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //         const data = await res.json();
    //         setProducts(data) 
    //     }
      
    //   fetchProducts();

    }, [])
    
    const handleAdd = (product) => {
        dispatch(addToCart(product))
    }

    if(status === STATUSES.LOADING){
        return <h2>loading.....</h2>
    }

    if(status === STATUSES.ERROR){
        return <h2>Something went wrong</h2>
    }

    return <div className='grid md:grid-cols-4 grid-cols-2 gap-5 p-5'>
    {
        products.map(product => (
            <div key={product.id} className='flex flex-col justify-center items-center bg-zinc-100 rounded-xl text-zinc-900 p-4 overflow-hidden shadow-xl'>
                <img className='h-32' src={product.image} alt="" />
                <h4 className='px-10 py-2 text-center font-semibold'>{product.title}</h4>
                <h5 className='font-semibold pb-2'>{product.price}</h5>
                <button onClick={() => handleAdd(product)} className='bg-zinc-800 rounded-2xl text-zinc-100 px-4 py-1'>Add to cart</button>
            </div>
        ))
    }
    </div>
}

export default Products