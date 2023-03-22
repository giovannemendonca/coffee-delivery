import { CartContext } from '@src/contexts/ShoppingCartContext'
import { useContext } from 'react'
import * as S from './styles'

export const ButtonCart = () => {
  const { amountIntes } = useContext(CartContext)

  return (
    <S.CartButton>
      <S.CartIcon />
      <S.CounterItem>{amountIntes}</S.CounterItem>
    </S.CartButton>
  )
}
