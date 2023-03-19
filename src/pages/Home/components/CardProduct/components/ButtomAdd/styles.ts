import styled from 'styled-components'

export const Button = styled.button`
  
  display: flex;
  align-items: center;
  justify-content: center;



  border: 0;
  border-radius: 6px;
  padding: 12px;
  border: none;

  cursor: pointer;


  background: ${({ theme }) => theme.colors.purpleDark};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`
