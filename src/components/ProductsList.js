import React from 'react';
import { useSelector } from 'react-redux';
import '../css/ProductsList.css';

const ProductsList = () => {
    const state = useSelector(state => state);

    return (
        <ul className="products-list">
            {state.products.map(product =>
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
                        <button>add to cart</button>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default ProductsList;
