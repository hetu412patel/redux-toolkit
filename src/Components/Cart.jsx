import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {

  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  const removeItemHandler = (productId) => {
    dispatch(remove(productId))
  }

  return (
    <div>
      <h3 className="cartWrapper">
        {
          products.map(product => (
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <button className='btn' onClick={() => removeItemHandler(product.id)}>Remove</button>
            </div>
          ))
        }
      </h3>
    </div>
  )
}

export default Cart