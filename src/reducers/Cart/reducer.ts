import { ActionTypes } from './actions'

export interface Item {
  id: string
  name: string
  category: string[]
  description: string
  path: string
  price: number
  quantity?: number
  payment?: string
}

interface CartState {
  itens: Item[]
  address: string | null,
  SelectedPayment?: 'credit' | 'debit' | 'money' | ''
}

export default function cartReduce(state: CartState, action: any) {

  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return {
        ...state,
        itens: [...state.itens, action.payload.item],
      }
    }

    case ActionTypes.ADD_FORM_PAYMENT: {
      return {
        ...state,
        SelectedPayment: action.payload.form
      }
    }

    default: return state
  }

}
