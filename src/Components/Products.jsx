import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const Products = () => {

    const [products, setProducts] = useState([])
    const liked = useSelector(state => state.wishList.products)
    console.log("hgvsdj",liked)

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
               <ProductItem product={product} 
               like={liked.indexOf(product.id) === -1 ? false : true}/>
            ))
        }
    </div>
  )
}

export default Products