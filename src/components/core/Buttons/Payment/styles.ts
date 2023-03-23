import styled, { css } from 'styled-components'

interface Selected {
  isSelected: boolean
}

export const Button = styled.div<Selected>`
  display: flex;
  gap: 1rem;

  padding: 1rem 1.4rem;

  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.baseButton};

  ${({ isSelected }) =>
    isSelected &&
    css`
      background: ${({ theme }) => theme.colors.purpleLight};
      border: 1px solid ${({ theme }) => theme.colors.purple};
    `}

  :active {
  }
`
