import { ADD_FETCHED_DATA, ADD_FETCHED_CATEGORY, SEARCH_OPTIONS } from './types';
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

export const setSearchOptions = options => {
    return {
        type: SEARCH_OPTIONS,
        payload: options
      }
}
