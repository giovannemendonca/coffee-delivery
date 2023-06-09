import { useContext } from 'react'
import { CartContext } from '@src/contexts/ShoppingCartContext'
import { useTheme } from 'styled-components'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import useCheckout from './hooks/useCheckout'

import * as S from './styles'

import Text from '@src/components/core/Text'
import FormControl from './components/FormControl'
import { ButtonText } from '@src/components/core/Buttons/Label'
import ButtonCounter from '@src/components/core/Buttons/Counter'
import ButtonPayment from '@src/components/core/Buttons/Payment'
import ButtonRemove from '@src/components/core/Buttons/Remove'

const Checkout = () => {
  const theme = useTheme()

  const {
    itens,
    addFormPayment,
    SelectedPayment,
    removeItemCart,
    sumTotal
  } = useContext(CartContext)

  const { onSubmit, endressForm, FormProvider, handleSubmit } = useCheckout()

  return (
    <>
      <S.ContainerCheckout onSubmit={handleSubmit(onSubmit)}>
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
                <FormProvider {...endressForm}>
                  <FormControl />
                </FormProvider>
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
              <ButtonPayment
                addFormPayment={addFormPayment}
                payment='credit'
                selected={SelectedPayment === 'credit'}
              >
                Cartão de crédito
              </ButtonPayment>
              <ButtonPayment
                addFormPayment={addFormPayment}
                payment='debit'
                selected={SelectedPayment === 'debit'}
              >
                Cartão de debito
              </ButtonPayment>
              <ButtonPayment
                addFormPayment={addFormPayment}
                payment='money'
                selected={SelectedPayment === 'money'}
              >
                Dinheiro
              </ButtonPayment>
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
            {itens.map((item) => {
              return (
                <S.CartItem key={item.id}>
                  <img
                    style={{ width: '64px' }}
                    src={item.path}
                    alt=''
                  />
                  <div>
                    <Text $scale={16}>{item.name}</Text>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <ButtonCounter
                        id={item.id}
                        count={item.quantity}
                      />
                      <ButtonRemove onClick={() => removeItemCart(item.id)}>
                        Remover
                      </ButtonRemove>
                    </div>
                  </div>
                  <Text
                    $bold
                    $scale={16}
                  >
                    R$ {item.valueTotal?.toFixed(2)}
                  </Text>
                </S.CartItem>
              )
            })}
            <div>
              <S.PriceContent>
                <Text $scale={16}>Total dos itens</Text>
                <Text $scale={16}>R$ {sumTotal.toFixed(2)}</Text>
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
                  R$ {(sumTotal + 3.5).toFixed(2)}
                </Text>
              </S.PriceContent>
            </div>
            <ButtonText isDisabled={!itens.length}>CONFIRMAR PEDIDO</ButtonText>
          </S.ContentCart>
        </S.ShopingCardContent>
      </S.ContainerCheckout>
    </>
  )
}

export default Checkout
