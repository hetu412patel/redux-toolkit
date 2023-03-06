import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const itemCounter = useSelector((state) => state.cart)
  const wishItemCounter = useSelector((state) => state.wishList.products)
  // console.log("hgvjsda",wishItemCounter);
  // console.log("hgvjsda",wishItemCounter.length);
 

  const activeCss = ({isActive}) => {
      return {
        fontWeight: isActive ? 'bolder' : 'normal',
        color: isActive ? '#513282' : 'black',
      }
  }  

  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <span className='logo'>REDUX STORE</span>
        <div>
            <NavLink style={activeCss} className='navLink' to='/'>Home</NavLink>
            <NavLink style={activeCss} className='navLink' to='/contact'>Contact</NavLink>
            <NavLink style={activeCss} className='navLink' to='/wishList'>WishList</NavLink>
            <NavLink style={activeCss} className='navLink' to='/cart'>Cart</NavLink>
            <span className='cartCount'>
                WishList : {wishItemCounter.length}
            </span>
            <span className='cartCount'>
                Cart Items : {itemCounter.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar