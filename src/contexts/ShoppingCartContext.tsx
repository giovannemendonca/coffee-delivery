import {
  addToCart,
  addPayment,
  removeItemToCart,
  manipulateItemQuantity
} from '@src/reducers/Cart/actions'
import cartReduce, { Item } from '@src/reducers/Cart/reducer'
import { createContext, useMemo, useReducer } from 'react'

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  itens: Item[]
  amountItens: number
  SelectedPayment: 'credit' | 'debit' | 'money'
  addFormPayment(data: 'credit' | 'debit' | 'money'): void
  removeItemCart(id: string): void
  manipulateQuantity(id: string, action: 'increment' | 'decrement'): void
  addItemToCart: (data: Item) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itensState, dispatch] = useReducer(cartReduce, {
    itens: [],
    address: null,
    SelectedPayment: ''
  })

  const { itens, SelectedPayment } = itensState

  function addItemToCart(data: Item) {
    dispatch(addToCart(data))
  }

  function removeItemCart(id: string) {
    dispatch(removeItemToCart(id))
  }

  function addFormPayment(data: 'credit' | 'debit' | 'money') {
    dispatch(addPayment(data))
  }

  function manipulateQuantity(id: string, action: 'increment' | 'decrement') {
    dispatch(manipulateItemQuantity(id, action))
  }

  const amountItens = useMemo(() => {
    return itens.length
  }, [itens])

  return (
    <CartContext.Provider
      value={{
        itens,
        amountItens,
        addItemToCart,
        addFormPayment,
        SelectedPayment,
        removeItemCart,
        manipulateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
