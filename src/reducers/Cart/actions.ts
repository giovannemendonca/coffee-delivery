import { Item } from "./reducer";


export enum ActionTypes {
   ADD_TO_CART = 'ADD_TO_CART' 
}


export function addToCart(item: Item){
    return {
        type: ActionTypes.ADD_TO_CART,
        payload: {
            item
        }
    }
}