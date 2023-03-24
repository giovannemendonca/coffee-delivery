import { CartContext } from '@src/contexts/ShoppingCartContext'
import { useContext, useEffect, useMemo } from 'react'
import * as S from './styles'

interface ButtonCounterProps {
  handleCount?: (type: 'increment' | 'decrement' | null) => void
  count: number
  id?: string
}

const ButtonCounter = ({ count, handleCount, id }: ButtonCounterProps) => {
  const { manipulateQuantity, removeItemCart } = useContext(CartContext)

  useEffect(() => {
    count === 0 && id && removeItemCart(id)
  }, [count])

  return (
    <S.Container>
      <button
        disabled={count < 1}
        type='button'
        onClick={() => {
          handleCount && handleCount('decrement')
          id && manipulateQuantity(id, 'decrement')
        }}
      >
        -
      </button>

      <span>{count}</span>
      <button
        type='button'
        onClick={() => {
          handleCount && handleCount('increment')
          id && manipulateQuantity(id, 'increment')
        }}
      >
        +
      </button>
    </S.Container>
  )
}

export default ButtonCounter
