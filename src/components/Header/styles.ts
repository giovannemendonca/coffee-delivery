import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  position: fixed;
  top: 0;
  width: 85%;
  max-width: 1600px;

  z-index: 1;

  background: ${({ theme }) => theme.colors.background};
  opacity: 0.9;


  @media (max-width: 900px) {
    padding: .8rem .8rem;
    width: 100%;
    opacity: .9;
    transition: 0.5s;
  }


`

export const Locality = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const LocalityBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 6px;
  padding: 10px 8px;

  

  font-size: ${({ theme }) => theme.typography.fontSize[16]};
  background: ${({ theme }) => theme.colors.purpleLight};
  color: ${({ theme }) => theme.colors.purple};
`
