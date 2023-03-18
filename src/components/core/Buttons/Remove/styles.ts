import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  background-color: ${({ theme }) => theme.colors.baseButton};

  line-height: 160%;
  padding: 6px 8px;

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  & > svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  :hover {
    background-color: ${({theme}) => theme.colors.baseHover};
  }
`
