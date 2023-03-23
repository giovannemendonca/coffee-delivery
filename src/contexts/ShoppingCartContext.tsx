import { addToCart, addPayment } from '@src/reducers/Cart/actions'
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
  addItemToCart: (data: Item) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itensState, dispatch] = useReducer(cartReduce, {
    itens: [],
    address: null,
    SelectedPayment: ''
  })

  const { itens, address, SelectedPayment } = itensState

  function addItemToCart(data: Item) {
    dispatch(addToCart(data))
  }

  function addFormPayment(data: 'credit' | 'debit' | 'money') {
    console.log(data)
    dispatch(addPayment(data))
  }

  const amountItens = useMemo(() => {
    return itens.length
  }, [itens])

  return (
    <CartContext.Provider
      value={{ itens, amountItens, addItemToCart, addFormPayment, SelectedPayment }}
    >
      {children}
    </CartContext.Provider>
  )
}
