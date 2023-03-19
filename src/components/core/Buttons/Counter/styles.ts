import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  
  background: ${({ theme }) => theme.colors.baseButton};



  button {
    border: none;
    padding: 8px;
    cursor: pointer;

    font-size: ${({ theme }) => theme.typography.fontSize[24]};

    background: ${({ theme }) => theme.colors.baseButton};
    border-radius: inherit;
    color: ${({ theme }) => theme.colors.purpleDark};
  }

  span {
    font-size: ${({ theme }) => theme.typography.fontSize[18]};
  }
`
