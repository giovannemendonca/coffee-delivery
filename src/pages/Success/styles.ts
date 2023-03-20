import styled, { css } from 'styled-components'
import Text from '@components/core/Text'
import { useTheme } from 'styled-components'

interface ColorProps {
  color: 'time' | 'dollar' | 'map'
}

const colorIcons = {
  time: 'yellow',
  dollar: 'yellowDark',
  map: 'purple'
} as const

export const ContainerSuccess = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: 0 auto;
  padding: 6rem 0;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    padding: 1.2rem 0;
  }
`

export const MainTitle = styled(Text)`
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const ContentTitle = styled.div`
  @media (max-width: 900px) {
    text-align: center;
  }
`

export const InfosOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 2rem;
`
export const DescribleOrders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 2rem;
  padding: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.yellowDark};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
`

export const DataOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`

export const Span = styled.span`
  font-weight: bold;
`

export const Icon = styled.div<ColorProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 6px;

  border-radius: 50%;

  background: ${({ color, theme }) => theme.colors[colorIcons[color]]};
  color: ${({ theme }) => theme.colors.white};
`

export const ContentImg = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`
