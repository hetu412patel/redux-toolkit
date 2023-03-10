import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import { toggleListItem } from '../store/wishListSlice'

const ProductItem = ({ product,like }) => {

  const dispatch = useDispatch();
  
  const [style, setStyle] = useState(false)

  const addItemHandler = (product) => {
    dispatch(add(product))
  }

  const addWishListItemHandler = (product) => {
    dispatch(toggleListItem(product))
  }

  const styleHandler = (id) => {
    setStyle(!style)
  }

  return (
    <div className="card" key={product.id}>
      <img src={product.image} alt="" />
      {/* <h4>{product.title}</h4> */}
      <h4>{product.title.substring(0, 12)}</h4>
      <h5>${product.price}</h5>
      <span style={{ margin: "0 1.5rem", cursor: "pointer" }}><i style={like ? { color: "red" } : {}} onClick={() => styleHandler(product.id)} className="fa-solid fa-heart" onClickCapture={() => addWishListItemHandler(product.id)}></i></span>
      <button className="btn" onClick={() => addItemHandler(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductItem