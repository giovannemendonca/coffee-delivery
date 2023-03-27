import { IncDecTypes, Item, paymentTypes } from '@src/interfaces'
import { newAddressFormData } from '@src/pages/Checkout/hooks/useCheckout'

export enum ActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  ADD_FORM_PAYMENT = 'ADD_FORM_PAYMENT',
  REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
  MANIPULATE_ITEM_QUANTITY = 'MANIPULATE_ITEM_QUANTITY',
  ADD_ENDDRESS = 'ADD_ENDDRESS',
  CLEAR_CART = 'CLEAR_CART'
}

export function addToCart(item: Item) {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: {
      item
    }
  }
}

export function addPayment(form: paymentTypes ) {
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
  actionHandle: IncDecTypes
) {
  return {
    type: ActionTypes.MANIPULATE_ITEM_QUANTITY,
    payload: {
      id,
      actionHandle
    }
  }
}

export function addEddress(address: newAddressFormData) {
  return {
    type: ActionTypes.ADD_ENDDRESS,
    payload: {
      address
    }
  }
}


export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART
  }
}