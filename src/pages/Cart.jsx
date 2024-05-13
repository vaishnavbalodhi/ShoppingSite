import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice';

const Cart = () => {

  const products = useSelector((state) => state.cart)

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  }

  return (
    <div className='w-full bg-slate-900'>
      <div>
        <h3 className='text-bold text-4xl p-5 font-bold'>Cart</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-5 p-5'>
          {
            products.map((product) => (
              <div key={product.id} className='flex flex-col justify-center items-center bg-zinc-100 rounded-xl text-zinc-900 p-4 overflow-hidden shadow-xl'>
                <img className='h-32' src={product.image} alt="" />
                <h4 className='px-10 py-2 text-center font-semibold'>{product.title}</h4>
                <h5 className='font-semibold pb-2'>{product.price}</h5>
                <button onClick={() => handleRemove(product.id)} className='bg-zinc-800 rounded-2xl text-zinc-100 px-4 py-1'>Remove</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Cart