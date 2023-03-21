import Text from '@src/components/core/Text'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'
import { IconItem } from '.'
import * as S from './styles'

const iconMap = {
  cart: (
    <ShoppingCart
      weight='fill'
      size={24}
    />
  ),
  package: (
    <Package
      weight='fill'
      size={24}
    />
  ),
  time: (
    <Timer
      weight='fill'
      size={24}
    />
  ),
  coffee: (
    <Coffee
      weight='fill'
      size={24}
    />
  )
}

export const BenefitsList = ({ items }: { items: IconItem[] }) => (
  <S.BenefitsList>
    {items.map(({ description, iconLabel }) => (
      <S.BenefitsItem key={iconLabel}>
        <S.IconItem icon={iconLabel}>{iconMap[iconLabel]}</S.IconItem>
        <Text $scale={16}>{description}</Text>
      </S.BenefitsItem>
    ))}
  </S.BenefitsList>
)
