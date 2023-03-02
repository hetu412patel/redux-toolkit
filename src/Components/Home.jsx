import React from 'react'
import Products from './Products'

const Home = () => {

  return (
    <div>
        <h2 className="heading">Welcome to the Redux Toolkit Store</h2>
        <section>
            <button className='btn' style={{margin:"0 1rem 1rem 1rem"}}>All Products</button>
            <button className='btn' style={{margin:"0 1rem 1rem 1rem"}}>Men's Clothing</button>
            <button className='btn' style={{margin:"0 1rem 1rem 1rem"}}>Women's Clothing</button>
            <button className='btn' style={{margin:"0 1rem 1rem 1rem"}}>Jewellery</button>
            <button className='btn' style={{margin:"0 1rem 1rem 1rem"}}>Electronic</button>
            <Products />
        </section>
    </div>
  )
}

export default Home