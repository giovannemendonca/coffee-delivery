import { Item } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_FORM_PAYMENT = 'ADD_FORM_PAYMENT'
}

export function addToCart(item: Item) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item
    }
  }
}

export function addPayment(form:'credit' | 'debit' | 'money' | 'debit') {
  return {
    type: ActionTypes.ADD_FORM_PAYMENT,
    payload: {
      form
    }
  }
}
