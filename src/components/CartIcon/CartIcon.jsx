import React from 'react'
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss'

const CartIcon = () => {
    return (
        <div className="cart-container">
            <ShoppingBagIcon />
            <span className="cart-count"> 5 </span>
        </div>
    )
}


export default CartIcon
