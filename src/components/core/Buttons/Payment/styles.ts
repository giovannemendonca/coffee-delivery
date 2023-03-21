import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  gap: 1rem;

  padding: 1rem 1.4rem;

  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.baseButton};

  :hover {
    background: ${({ theme }) => theme.colors.purpleLight};
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }

`
