import Text from '@src/components/core/Text'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import InputText from '@src/components/core/Input'
import { ButtonText } from '@src/components/core/Buttons/Label'
import ButtonPayment from '@src/components/core/Buttons/Payment'
import ButtonCounter from '@src/components/core/Buttons/Counter'
import ButtonRemove from '@src/components/core/Buttons/Remove'

const Checkout = () => {
  const theme = useTheme()

  return (
    <S.ContainerCheckout>
      <S.SectionAddress>
        <Text
          $bold
          $scale={18}
          style={{ fontFamily: theme.typography.fontFamily.header }}
        >
          Complete seu pedido
        </Text>
        <S.Content>
          <div>
            <S.HeaderContent>
              <MapPinLine
                size={22}
                color={theme.colors.yellow}
              />
              <div>
                <Text
                  color={theme.colors.baseSubtitle}
                  $scale={18}
                >
                  Endereço de Entrega
                </Text>
                <Text
                  $scale={14}
                  color={theme.colors.baseText}
                >
                  Informe o endereço onde deseja receber seu pedido
                </Text>
              </div>
            </S.HeaderContent>
            <div>
              <S.Form>
                <S.InputContainer>
                  <InputText
                    placeholder='CEP'
                    size='sm'
                  />
                </S.InputContainer>

                <S.InputContainer>
                  <InputText
                    placeholder='Rua'
                    size='xg'
                  />
                </S.InputContainer>

                <S.InputContainer>
                  <InputText
                    placeholder='Número'
                    size='xg'
                  />

                  <InputText
                    placeholder='Complemento'
                    size='xg'
                    isOptional
                  />
                </S.InputContainer>

                <S.InputContainer>
                  <InputText
                    placeholder='Bairro'
                    size='xg'
                  />
                  <InputText
                    placeholder='Cidade'
                    size='xg'
                  />
                  <InputText
                    placeholder='UF'
                    size='xg'
                  />
                </S.InputContainer>
              </S.Form>
            </div>
          </div>
        </S.Content>

        <S.Content>
          <div>
            <S.HeaderContent>
              <CurrencyDollar
                size={22}
                color={theme.colors.purple}
              />
              <div>
                <Text $scale={16}>Pagamento</Text>
                <Text>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Text>
              </div>
            </S.HeaderContent>
          </div>

          <S.BottonsPayment>
            <ButtonPayment payment='credit'>Cartão de crédito</ButtonPayment>
            <ButtonPayment payment='debit'>Cartão de crédito</ButtonPayment>
            <ButtonPayment payment='money'>Cartão de crédito</ButtonPayment>
          </S.BottonsPayment>
        </S.Content>
      </S.SectionAddress>
      <S.ShopingCardContent>
        <Text
          $bold
          $scale={18}
          style={{ fontFamily: theme.typography.fontFamily.header }}
        >
          Cafés selecionados
        </Text>
        <S.ContentCart>
          <S.CartItem>
            <img
              style={{ width: '64px' }}
              src={'/assets/coffee/expressTradicional.svg'}
              alt=''
            />
            <div>
              <Text $scale={16}>Expresso Tradicional</Text>
              <div style={{ display: 'flex', gap: '6px' }}>
                <ButtonCounter />
                <ButtonRemove>Remover</ButtonRemove>
              </div>
            </div>
            <Text
              $bold
              $scale={16}
            >
              R$ 9.90
            </Text>
          </S.CartItem>
          <S.CartItem>
            <img
              style={{ width: '64px' }}
              src={'/assets/coffee/expressTradicional.svg'}
              alt=''
            />
            <div>
              <Text $scale={16}>Expresso Tradicional</Text>
              <div style={{ display: 'flex', gap: '6px' }}>
                <ButtonCounter />
                <ButtonRemove>Remover</ButtonRemove>
              </div>
            </div>
            <Text
              $bold
              $scale={16}
            >
              R$ 9.90
            </Text>
          </S.CartItem>
          <div>
            <S.PriceContent>
              <Text $scale={16}>Total dos itens</Text>
              <Text $scale={16}>R$ 29,70</Text>
            </S.PriceContent>
            <S.PriceContent>
              <Text $scale={16}>Entrega</Text>
              <Text $scale={16}>R$ 3,50</Text>
            </S.PriceContent>
            <S.PriceContent>
              <Text
                $bold
                $scale={16}
              >
                Total
              </Text>
              <Text
                $bold
                $scale={16}
              >
                R$ 33,20
              </Text>
            </S.PriceContent>
          </div>
          <ButtonText>CONFIRMAR PEDIDO</ButtonText>
        </S.ContentCart>
      </S.ShopingCardContent>
    </S.ContainerCheckout>
  )
}

export default Checkout
