import { FETCH_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

export default function cartReducer(state = [], action) {
    switch (action.type) {
        case FETCH_CART:
            return [...action.payload];
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(item => item.id === action.payload.productId);
        default:
            return state;
    }
};
