import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishItem }from '../store/wishListSlice'

const WishItem = () => {

    const dispatch = useDispatch()
    const WishItemList = useSelector((state) => state.wishList)

    const whishitem = useSelector(state => state)
    console.log("whishlist", whishitem)

    const removeWishItemHandler = (productId) => {
        dispatch(removeWishItem(productId))
    }

  return (
    <div>
      <h3 className="cartWrapper">
        {
            WishItemList.map(product => (
            <div className="cartCard">
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>${product.price}</h5>
              <button className='btn' onClick={() => removeWishItemHandler(product.id)}>Remove</button>
            </div>
          ))
        }
      </h3>
    </div>
  )
}

export default WishItem