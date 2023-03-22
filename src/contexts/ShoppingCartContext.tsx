import { addToCart } from '@src/reducers/Cart/actions'
import cartReduce, { Item } from '@src/reducers/Cart/reducer'
import { createContext, useMemo, useReducer } from 'react'

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  itens: Item[]
  amountItens: number
  addItemToCart: (data: Item) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itensState, dispatch] = useReducer(cartReduce, {
    itens: [],
    address: null
  })

  const { itens } = itensState

  function addItemToCart(data: Item) {
    dispatch(addToCart(data))
  }

  const amountItens = useMemo(() => {
    return itens.length
  }, [itens])

  return (
    <CartContext.Provider value={{ itens, amountItens, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
