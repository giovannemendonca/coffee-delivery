import styled from 'styled-components'
import { ShoppingCart as ShoppingCartPhosphor } from 'phosphor-react'

export const ButtonCart = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;

  background: ${({ theme }) => theme.colors['yellow-light']};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const ShoppingCart = styled(ShoppingCartPhosphor).attrs({
  size: 22,
  weight: 'fill'
})`
  color: ${({ theme }) => theme.colors['yellow-dark']};
  box-shadow: '';
`
