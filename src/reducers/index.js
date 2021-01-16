import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    products: productsReducer,
    categories: categoriesReducer
});
