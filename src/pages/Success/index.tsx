import React from 'react'
import * as S from './styles'
import sucess from '@src/assets/img/sucess.svg'
import Text from '@src/components/core/Text'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
const Sucess = () => {
  const theme = useTheme()

  return (
    <S.ContainerSuccess>
      <S.InfosOrder>
        <S.ContentTitle>
          <S.MainTitle
            $scale={32}
            $bold
          >
            Uhu! Pedido confirmado
          </S.MainTitle>
          <Text $scale={20}>
            Agora é só aguardar que logo o café chegará até você
          </Text>
        </S.ContentTitle>
        <S.DescribleOrders>
          <S.DataOrder>
            <S.Icon color='map'>
              <MapPin
                size={22}
                weight='fill'
                color={theme.colors.white}
              />
            </S.Icon>
            <div>
              Entrega em <S.Span>Rua João Daniel Martinelli, 102</S.Span>
              <Text> Farrapos - Porto Alegre, RS</Text>
            </div>
          </S.DataOrder>

          <S.DataOrder>
            <S.Icon color='time'>
              <Timer
                weight='fill'
                size={22}
                color={theme.colors.white}
              />
            </S.Icon>
            <div>
              <Text>Previsão de entrega</Text>
              <Text $bold>20 min - 30 min </Text>
            </div>
          </S.DataOrder>

          <S.DataOrder>
            <S.Icon color='dollar'>
              <CurrencyDollar
                weight='fill'
                size={22}
                color={theme.colors.white}
              />
            </S.Icon>
            <div>
              <Text>Pagamento na entrega</Text>
              <Text $bold>Cartão de Crédito</Text>
            </div>
          </S.DataOrder>
        </S.DescribleOrders>
      </S.InfosOrder>
      <S.ContentImg>
        <img src={sucess} />
      </S.ContentImg>
    </S.ContainerSuccess>
  )
}

export default Sucess
