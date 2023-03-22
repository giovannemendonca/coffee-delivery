import { ActionTypes } from './actions'

export interface Item {
  id: string
  name: string
  category: string[]
  description: string
  path: string
  price: number
  quantity?: number
}

interface CartState {
  itens: Item[]
  address: string | null
}

export default function cartReduce(state: CartState, action: any) {

  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return {
        ...state,
        itens: [...state.itens, action.payload.item],
        address: 'foo'
      }
    }
    default: return state
  }
}
