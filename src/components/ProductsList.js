import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';
import { setSearchOptions, addToCart } from '../actions';
import '../css/ProductsList.css';

const ProductsList = ({ location }) => {
    
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const options = queryString.parse(location.search);

    useEffect(() => {
        dispatch(setSearchOptions(options));
    }, []);

    const filterCategory = (product) => {
        if (options.category === undefined || options.category === 'all') return true;
        return product.category === options.category;
    }

    const filterName = (product) => {
        if (options.searchTerm === undefined || options.searchTerm === '') return true;
        return product.title.toLowerCase().includes(options.searchTerm.toLowerCase());
    }

    const cart = (product) => {
        const s = localStorage.getItem("cart");
        if (s === null) { 
            localStorage.setItem("cart", JSON.stringify([product]));
        } else {
            const newCart = JSON.parse(s);
            newCart.push(product);
            localStorage.setItem("cart", JSON.stringify(newCart));
        }
        dispatch(addToCart(product))
    }

    return (
        <ul className="products-list">
            {state.products
                .filter(filterCategory)
                .filter(filterName)
                .map(product =>
                    <li className="product" key={product.id}>
                        <div className="product-img">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product-category">
                            {product.category}
                        </div>
                        <div className="product-details">
                            <h2>{product.title}</h2>
                            <div>${product.price}</div>
                        </div>
                        <div className="product-add-btn">
                            <button onClick={() => cart(product)}>add to cart</button>
                        </div>
                    </li>
                )}
        </ul>
    );
}

export default ProductsList;
