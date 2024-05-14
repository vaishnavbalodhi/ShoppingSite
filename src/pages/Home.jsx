import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-slate-900'>
        <div className='flex flex-col items-center'>
            <h2 className='text-zinc-100 p-4 font-bold text-5xl'>Welcome to the Redux toolkit store!</h2>
            <section className=''>
                <h3 className='p-4 font-bold text-3xl'>Products</h3>
                <Products />
            </section>
        </div>
    </div>
  )
}

export default Home