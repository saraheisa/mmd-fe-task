import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';
import searchOptionsReducer from './searchOptionsReducer';

export default combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    searchOptions: searchOptionsReducer
});
