import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import searchOptionsReducer from './searchOptionsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    searchOptions: searchOptionsReducer, 
    cart: cartReducer
});
