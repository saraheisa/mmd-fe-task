import React from 'react';
import { useSelector } from 'react-redux';
import '../css/cart.css';

const Cart = () => {
    const state = useSelector(state => state);

    return(
        <div className="cart-container">
            <i class="fas fa-shopping-cart"></i>
            <span>{ state.cart.length }</span>
        </div>
    );
};

export default Cart;
