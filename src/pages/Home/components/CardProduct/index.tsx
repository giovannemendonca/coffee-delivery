import ButtonCounter from '@src/components/core/Buttons/Counter'
import Text from '@src/components/core/Text'
import { useTheme } from 'styled-components'
import * as S from './styles'
import ButtonAdd from './components/ButtomAdd'
import { useEffect, useState } from 'react'

interface CardProductProps {
  name: string
  category: string[]
  description: string
  path: string
  price: number
}

const CardProduct = (Props: CardProductProps) => {
  const { name, category, description, price, path } = Props
  const theme = useTheme()

  return (
    <S.CardContainer>
      <S.ContainerImage>
        <img src={path} />
      </S.ContainerImage>

      <S.ContainerInfo>
        <div>
          {category.map((item, index) => (
            <S.Category key={index}>{item}</S.Category>
          ))}
        </div>
        <Text
          $bold
          $scale={20}
          style={{ fontFamily: theme.typography.fontFamily.header }}
        >
          {name}
        </Text>

        <Text
          $scale={14}
          style={{ color: theme.colors.baseLabel, lineHeight: '180%' }}
        >
          {description}
        </Text>

        <S.PriceQuantity>
          <Text
            $bold
            $scale={24}
            style={{ color: theme.colors.baseText }}
          >
            R${price.toFixed(2)}
          </Text>

          <ButtonCounter />
          <ButtonAdd />
        </S.PriceQuantity>
      </S.ContainerInfo>
    </S.CardContainer>
  )
}

export default CardProduct
