import { SEARCH_OPTIONS } from '../actions/types';

export default function searchOptionsReducer (state = [], action) {
    switch (action.type) {
        case SEARCH_OPTIONS:
            return [ ...state, action.payload];
        default:
            return state;
    }
};
