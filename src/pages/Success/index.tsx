import * as S from './styles'
import sucess from '@src/assets/img/sucess.svg'
import Text from '@src/components/core/Text'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '@src/contexts/ShoppingCartContext'
const Sucess = () => {
  const theme = useTheme()

  const { cartState } = useContext(CartContext)

  console.log(cartState)

  const { address, SelectedPayment } = cartState

  const payment = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro'
  }

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
            {address && (
              <div>
                Entrega em{' '}
                <S.Span>
                  {address.rua}, {address.numero}
                </S.Span>
                <Text $scale={16}>
                  {' '}
                  {address.bairro} - {address.cidade}, {address.uf}
                </Text>
              </div>
            )}
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
              <Text $bold>{payment[SelectedPayment]}</Text>
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
