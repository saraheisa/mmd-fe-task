import { ADD_FETCHED_CATEGORY } from '../actions/types';

export default function categoriesReducer(state = [], action) {
    switch (action.type) {
        case ADD_FETCHED_CATEGORY:
            return [ ...action.payload];
        default:
            return state;
    }
};
