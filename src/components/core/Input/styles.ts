import styled, { css } from 'styled-components'

interface SizeProps {
  sizeWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xg'
  isOptional?: boolean
}

const Size = {
  xs: '40',
  sm: '40',
  md: '40',
  lg: '70',
  xg: '100'
}

export const Input = styled.div<SizeProps>`
  position: relative;
  width: 100%;

  
  input {
    font-size: 1rem;
    padding: 12px;

    border: none;
    border-radius: 4px;

    width: ${({ sizeWidth }) => `${Size[sizeWidth]}%`};
    background: ${({ theme }) => theme.colors.baseButton};
    color: ${({ theme }) => theme.colors.baseText};

    &::selection {
      border: none;
    }
  }

  span {
    display: none;
    position: absolute;
    top: 14px;
    right: 8px;

    font-size: 0.6rem;

    color: ${({ theme }) => theme.colors.baseText};

    ${({ isOptional }) =>
      isOptional &&
      css`
        display: block;
      `}
  }
`
