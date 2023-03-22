import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import * as S from './styles'

interface ButtonAddProps {
  onClick: () => void
}

const ButtonAdd = ({onClick}: ButtonAddProps) => {
  return (
    <S.Button onClick={onClick}>
      <ShoppingCart  size={22} weight={'fill'}/>
    </S.Button>
  )
}

export default ButtonAdd