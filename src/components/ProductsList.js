import React from 'react';
import { useSelector } from 'react-redux';

const ProductsList = () => {
    const state = useSelector(state => state);

    return(
        <ul className="products-list">
            {state.products.map( product => 
                <li className="product">
                    <div>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div>
                        {product.category}
                    </div>
                    <div>
                        <h2>{product.title}</h2>
                        <div>${product.price}</div>
                        <div>
                            <button>add to cart</button>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    );
}

export default ProductsList;
