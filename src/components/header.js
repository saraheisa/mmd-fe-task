import React from 'react';
import Search from './Search'
import Cart from './Cart';
import '../css/header.css';

const Header = () => {
    return (
        <header>
            <h1>megashop</h1>
            <Search/>
            <Cart/>
        </header>
    );
}

export default Header;
