import Text from '@src/components/core/Text'
import * as S from './styles'
import Imagem from '@src/assets/img/imagemBanner.svg'
import { BenefitsList } from './BenefitsList'

export interface IconItem {
  iconLabel: 'cart' | 'package' | 'time' | 'coffee'
  description: string
}

export const Banner = () => {
  const itens: IconItem[] = [
    {
      iconLabel: 'cart',
      description: 'Compra simples e segura'
    },
    {
      iconLabel: 'package',
      description: 'Embalagem mantém o café intacto'
    },
    {
      iconLabel: 'time',
      description: 'Entrega rápida e rastreada'
    },
    {
      iconLabel: 'coffee',
      description: 'O café chega fresquinho até você'
    }
  ]

  return (
    <S.ContainerBanner>
      <S.Descriptions>
        <S.Header>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>

          <Text $scale={20}>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Text>
        </S.Header>

        <BenefitsList items={itens} />
      </S.Descriptions>

      <S.ContaierImage>
        <img
          src={Imagem}
          alt='banner'
        />
      </S.ContaierImage>
    </S.ContainerBanner>
  )
}
