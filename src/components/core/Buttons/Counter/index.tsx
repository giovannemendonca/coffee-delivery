import React, { useState } from 'react'
import * as S from './styles'

interface ButtonCounterProps {
  handleCount?: (type: 'increment' | 'decrement' | null) => void
  count?: number
}

const ButtonCounter = ({ count, handleCount }: ButtonCounterProps) => {
  return (
    <S.Container>
      <button
        onClick={() => {
          handleCount && handleCount('decrement')
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          handleCount && handleCount('increment')
        }}
      >
        +
      </button>
    </S.Container>
  )
}

export default ButtonCounter
