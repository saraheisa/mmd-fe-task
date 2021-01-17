import { ADD_FETCHED_DATA, ADD_FETCHED_CATEGORY, SEARCH_OPTIONS, ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART } from './types';
import axios from 'axios';

const apiUrl = 'https://fakestoreapi.com/products';

export const fetchData = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: ADD_FETCHED_DATA,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchCategory = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/categories`)
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch({
                    type: ADD_FETCHED_CATEGORY,
                    payload: data
                })
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchCart = (data) => {
    return {
        type: FETCH_CART,
        payload: data
    }
};

export const setSearchOptions = options => {
    return {
        type: SEARCH_OPTIONS,
        payload: options
    }
}

export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product
        }
    }
};

export const removeFromCart = productId => {
    return {
        type: REMOVE_FROM_CART,
        payload: {
            productId
        }
    }
};
