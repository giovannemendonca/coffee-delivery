import styled from 'styled-components'
import { ShoppingCart  } from 'phosphor-react'

export const CartButton = styled.button`
  border: 0;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.yellowLight};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  position: relative;
`

export const CartIcon = styled(ShoppingCart).attrs({
  size: 22,
  weight: 'fill'
})`
  color: ${({ theme }) => theme.colors.yellowDark};
`
export const CounterItem = styled.span`
  width: 20px;
  height: 22px;

  position: absolute;
  bottom: 32px;
  left: 26px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ theme }) => theme.typography.fontSize[12]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.yellowDark};
  color: ${({ theme }) => theme.colors.white};
`
