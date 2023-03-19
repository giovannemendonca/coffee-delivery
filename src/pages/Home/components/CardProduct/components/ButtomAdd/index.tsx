import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import * as S from './styles'

const ButtonAdd = () => {
  return (
    <S.Button>
      <ShoppingCart size={22} weight={'fill'}/>
    </S.Button>
  )
}

export default ButtonAdd