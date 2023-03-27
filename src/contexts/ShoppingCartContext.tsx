import {CartState, IncDecTypes, Item, paymentTypes } from '@src/interfaces'
import { newAddressFormData } from '@src/pages/Checkout/hooks/useCheckout'
import {
  addToCart,
  addPayment,
  removeItemToCart,
  manipulateItemQuantity,
  addEddress,
  clearCart
} from '@src/reducers/Cart/actions'
import cartReduce from '@src/reducers/Cart/reducer'
import { createContext, useMemo, useReducer, useState } from 'react'

interface CartContextProviderProps {
  children: React.ReactNode
}
interface CartContextType {
  itens: Item[]
  amountItens: number
  SelectedPayment: paymentTypes
  sumTotal: number
  cartState: CartState
  newOrder: CartState | null
  addFormPayment(data: paymentTypes): void
  removeItemCart(id: string): void
  manipulateQuantity(id: string, action: IncDecTypes): void
  addItemToCart: (data: Item) => void
  addFormEndress: (data: newAddressFormData) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReduce, {
    itens: [],
    address: null,
    SelectedPayment: 'credit'
  })

  const [newOrder, setNewOrder] = useState<CartState | null>(null)

  const { itens, SelectedPayment } = cartState

  function addItemToCart(data: Item) {
    dispatch(addToCart(data))
  }

  function removeItemCart(id: string) {
    dispatch(removeItemToCart(id))
  }

  function addFormPayment(data: paymentTypes) {
    dispatch(addPayment(data))
  }

  function manipulateQuantity(id: string, action: IncDecTypes) {
    dispatch(manipulateItemQuantity(id, action))
  }

  function addFormEndress(data: newAddressFormData) {
    dispatch(addEddress(data))

    setNewOrder({
      itens,
      SelectedPayment,
      address: data
    })

    dispatch(clearCart())
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
        cartState,
        newOrder
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
