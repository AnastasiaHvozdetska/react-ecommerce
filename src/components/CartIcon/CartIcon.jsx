import React, { useContext } from 'react'
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../context/cart-context'
import './CartIcon.styles.scss'

const CartIcon = () => {
    const { itemCount } = useContext(CartContext);
    return (
        <div className="cart-container">
            <ShoppingBagIcon />
            { itemCount > 0 && (
                <span className="cart-count"> {itemCount} </span>
            )}
        </div>
    )
}


export default CartIcon
