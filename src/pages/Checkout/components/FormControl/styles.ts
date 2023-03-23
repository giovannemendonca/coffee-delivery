import styled from 'styled-components'

interface SizeProps {
  sizeWidth: 'xs' | 'sm' | 'md' | 'lg' | 'xg'
  isOptional?: boolean
}

const Size = {
  xs: '20',
  sm: '40',
  md: '40',
  lg: '70',
  xg: '100'
}

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  gap: 1rem;

  margin-top: 1.8rem;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const Input = styled.input<SizeProps>`
  position: relative;
  width: 100%;

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
`
