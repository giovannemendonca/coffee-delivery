import { ActionTypes } from './actions'

export interface Item {
  id: string
  name: string
  category: string[]
  description: string
  path: string
  price: number
  quantity: number
  payment?: 'credit' | 'debit' | 'money'
  valueTotal: number
}

interface Address {
  cep: string
  rua: string
  bairro: string
  cidade: string
  numero: string
  estado: string
  uf: string
}

export interface CartState {
  itens: Item[]
  address: Address | null
  SelectedPayment: 'credit' | 'debit' | 'money'
}

export default function cartReduce(
  state: CartState,
  action: any
): {
  itens: Item[]
  address: Address | null
  SelectedPayment: 'credit' | 'debit' | 'money'
} {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return {
        ...state,
        itens: [
          ...state.itens,
          {
            ...action.payload.item,
            valueTotal: action.payload.item.price * action.payload.item.quantity
          }
        ]
      }
    }

    case ActionTypes.ADD_FORM_PAYMENT: {
      return {
        ...state,
        SelectedPayment: action.payload.form
      }
    }
    case ActionTypes.REMOVE_ITEM_TO_CART: {
      return {
        ...state,
        itens: state.itens.filter((item) => item.id !== action.payload.id)
      }
    }
    case ActionTypes.MANIPULATE_ITEM_QUANTITY: {
      const { id, actionHandle } = action.payload

      return {
        ...state,
        itens: state.itens.map((item) => {
          if (item.id === id) {
            const newQuantity =
              actionHandle === 'increment'
                ? item.quantity + 1
                : item.quantity - 1

            return {
              ...item,
              quantity: newQuantity,
              valueTotal: item.price * newQuantity
            }
          }
          return item
        })
      }
    }
    case ActionTypes.ADD_ENDDRESS: {
      return {
        ...state,
        address: action.payload.address
      }
    }
    case ActionTypes.CLEAR_CART: {
      return {
        ...state,
        itens: [],
        address: null,
        SelectedPayment: 'credit'
      }
    }

    default:
      return state
  }
}
