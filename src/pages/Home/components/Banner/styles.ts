import styled from 'styled-components'
import backgraund from '@src/assets/img/background.svg'

interface IconProps {
  icon: 'cart' | 'time' | 'package' | 'coffee'
}


const iconColors = {
  cart: 'yellowDark',
  coffee: 'purple',
  package: 'baseText',
  time: 'yellow'
} as const


export const ContainerBanner = styled.header`
  display: flex;
  padding: 92px 0;
  background: url(${backgraund}) no-repeat center;
  background-size: cover;
;



  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    padding: 1rem;
  }
`

export const Descriptions = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.header`
  margin-bottom: 3rem;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamily.header};
  font-weight: 800;
  font-size: 3em;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 26px;
  list-style: none;
  padding: 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const IconItem = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  padding: 10px;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, icon }) => theme.colors[iconColors[icon]]};
`

export const ContaierImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`
