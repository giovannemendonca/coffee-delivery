import { CartContext } from '@src/contexts/ShoppingCartContext'
import { Item } from '@src/interfaces'
import { useContext, useState } from 'react'

export function useProducts() {
  const [count, setCount] = useState<number>(0)

  const { addItemToCart } = useContext(CartContext)

  function increment() {
    setCount((old) => old + 1)
  }
  function decrement() {
    {
      count > 0 ? setCount((old) => old - 1) : setCount(0)
    }
  }
  function handleCount(type: 'increment' | 'decrement' | null) {
    type === 'increment' ? increment() : decrement()
  }

  function AdicionarAoCarrinho(data: Item) {
    addItemToCart({
      ...data,
      quantity: count
    })
    setCount(0)
  }

  return {
    count,
    AdicionarAoCarrinho,
    handleCount
  }
}

export default useProducts
