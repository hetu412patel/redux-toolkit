import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleListItem } from '../store/wishListSlice'

const WishItem = () => {

    const dispatch = useDispatch()
    const WishItemList = useSelector((state) => state.wishList.products)

    const WishItemHandler = (productId) => {
        dispatch(toggleListItem(productId))
        console.log("title",WishItemHandler.title)
    }

  return (
    <div>
      <h3 className="cartWrapper">
        {
            WishItemList.map(product => (
            <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <button className='btn' onClick={() => WishItemHandler(product.id)}>Remove</button>
            </div>
          ))
        }
      </h3>
    </div>
  )
}

export default WishItem