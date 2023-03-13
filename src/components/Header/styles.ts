import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;
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

  font-size: ${({ theme }) => theme.size[14]};
  background: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors.purple};
`