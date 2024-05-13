import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const items = useSelector((state) => state.cart);

  return (
    <div>
        <div className='w-full flex items-center justify-between bg-slate-800 p-4 font-semibold text-slate-100'>
            <span className='uppercase'>Redux Store</span>
            <div className='flex gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
                <span>Cart items: {items.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar