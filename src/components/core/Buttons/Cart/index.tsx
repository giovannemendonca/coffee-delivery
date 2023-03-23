import { CartContext } from '@src/contexts/ShoppingCartContext'
import { useContext } from 'react'
import * as S from './styles'

export const ButtonCart = () => {
  const { amountItens } = useContext(CartContext)

  return (
      <S.CartButton>
        <S.CartIcon />
        {amountItens > 0 && <S.CounterItem>{amountItens}</S.CounterItem>}
      </S.CartButton>
  )
}
