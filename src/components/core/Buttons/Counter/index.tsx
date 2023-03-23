import { CartContext } from '@src/contexts/ShoppingCartContext'
import React, { useContext, useState } from 'react'
import * as S from './styles'

interface ButtonCounterProps {
  handleCount?: (type: 'increment' | 'decrement' | null) => void
  count: number
  id: string
}

const ButtonCounter = ({ count, handleCount, id }: ButtonCounterProps) => {
  const { manipulateQuantity } = useContext(CartContext)

  return (
    <S.Container>
      <button
        disabled={count < 1}
        type='button'
        onClick={() => {
          handleCount && handleCount('decrement')
          manipulateQuantity(id, 'decrement')
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        type='button'
        onClick={() => {
          handleCount && handleCount('increment')
          manipulateQuantity(id, 'increment')
        }}
      >
        +
      </button>
    </S.Container>
  )
}

export default ButtonCounter
