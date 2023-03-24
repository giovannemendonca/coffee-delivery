import {
  addToCart,
  addPayment,
  removeItemToCart,
  manipulateItemQuantity,
  addEddress
} from '@src/reducers/Cart/actions'
import cartReduce, { CartState, Item } from '@src/reducers/Cart/reducer'
import { createContext, useMemo, useReducer } from 'react'

interface CartContextProviderProps {
  children: React.ReactNode
}
interface CartContextType {
  itens: Item[]
  amountItens: number
  SelectedPayment: 'credit' | 'debit' | 'money'
  sumTotal: number
  cartState: CartState
  addFormPayment(data: 'credit' | 'debit' | 'money'): void
  removeItemCart(id: string): void
  manipulateQuantity(id: string, action: 'increment' | 'decrement'): void
  addItemToCart: (data: Item) => void
  addFormEndress: (data: any) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReduce, {
    itens: [],
    address: null,
    SelectedPayment: 'credit'
  })

  const { itens, SelectedPayment } = cartState

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

  function addFormEndress(data: any) {
    dispatch(addEddress(data))
  }

  const amountItens = useMemo(() => {
    return itens.length
  }, [itens])

  const sumTotal: number = useMemo(() => {
    return itens.reduce((acc, curr) => {
      return curr.valueTotal + acc
    }, 0)
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
        manipulateQuantity,
        sumTotal,
        addFormEndress,
        cartState
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
