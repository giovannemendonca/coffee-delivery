import styled from 'styled-components'

export const Button = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 32px;

  border: 0;
  border-radius: 6px;
  padding: 6px;
  border: none;

  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  background: ${({ theme }) => theme.colors.purpleDark};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
