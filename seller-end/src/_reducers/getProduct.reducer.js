import {userConstants} from '../_constants';

export function getProduct(state = {}, action){
    switch(action.type){
        case userConstants.GET_PRODUCTS:
        return {
          product: action.products
        };

        case userConstants.GET_PRODUCTS_FAILURE:
        return {};

        default: return state;
    }
}


