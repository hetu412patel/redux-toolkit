import React from 'react'
import { useState, useEffect } from 'react'
import ProductItem from './ProductItem'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            // console.log(data);
            setProducts(data)
        }
        fetchProducts()
    },[])

  return (
    <div className="productsWrapper">
        {
            products.map(product => (
               <ProductItem product={product} />
            ))
        }
    </div>
  )
}

export default Products