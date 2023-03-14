import styled from 'styled-components'

export const ButtonDefault = styled.button`
  padding: 11px 45px;

  flex: 1;
  border-radius: 6px;
  border: 0;

  background: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};

  cursor: pointer;

  :hover{
    background: ${({theme}) => theme.colors.yellowDark};
    transition: .5s;
  }
`
