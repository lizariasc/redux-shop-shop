// import actions
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from "./actions";

import { useReducer } from 'react';

// UPDATE_PRODUCTS reducer
export const reducer = (state, action) => {
    switch (action.type) {
        // if the action type value is the value of `UPDATE_PRODUCTS`, return a new state object with an updated products array
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        // if the action type value is the value of `UPDATE_CATEGORIES`, return a new state object with an updated categories array
        case UPDATE_CATEGORIES:
            return {
                ...state,
                categories: [...action.categories]
            };
        // if the action type value is the value of `UPDATE_CURRENT_CATEGORY`, return a new state object with an updated currentCategory value
        case UPDATE_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            };
        // if it's none of these actions, do not update the state and just return the current state
        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState)
}