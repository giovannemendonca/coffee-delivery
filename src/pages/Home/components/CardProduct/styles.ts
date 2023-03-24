import Text from '@src/components/core/Text'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  position: relative;

  max-width: 16rem;
  height: 21rem;

  padding: 16px;
  margin-bottom: 9.81rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;

  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  background-color: ${({ theme }) => theme.colors.baseCard};


  @media (max-width: 768px) {
    margin-bottom: 2rem;
    justify-content: center;
    gap: 8rem;
  }

`

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  height: 40%;

  img {
    position: absolute;
    top: -20px;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
`

export const Category = styled.span`
  padding: 4px 8px;
  border-radius: 8px;
  margin-right: 4px;

  background: ${({ theme }) => theme.colors.yellowLight};
  color: ${({ theme }) => theme.colors.yellowDark};
`

export const PriceQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
