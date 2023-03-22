import { addToCart } from '@src/reducers/Cart/actions'
import cartReduce, { Item } from '@src/reducers/Cart/reducer'
import { createContext, useMemo, useReducer } from 'react'

interface CartContextProviderProps {
  children: React.ReactNode
}

interface CartContextType {
  itens: Item[]
  amountIntes: number
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

  const amountIntes = useMemo(() => {
    return itens.length
  }, [itens])

  return (
    <CartContext.Provider value={{ itens, amountIntes, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
