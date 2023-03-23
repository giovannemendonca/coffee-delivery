import { Item } from './reducer'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_FORM_PAYMENT = 'ADD_FORM_PAYMENT',
  REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
  MANIPULATE_ITEM_QUANTITY = 'MANIPULATE_ITEM_QUANTITY'
}

export function addToCart(item: Item) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item
    }
  }
}

export function addPayment(form: 'credit' | 'debit' | 'money' | 'debit') {
  return {
    type: ActionTypes.ADD_FORM_PAYMENT,
    payload: {
      form
    }
  }
}

export function removeItemToCart(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_TO_CART,
    payload: {
      id
    }
  }
}

export function manipulateItemQuantity(
  id: string,
  actionHandle: 'increment' | 'decrement'
) {
  return {
    type: ActionTypes.MANIPULATE_ITEM_QUANTITY,
    payload: {
      id,
      actionHandle
    }
  }
}
