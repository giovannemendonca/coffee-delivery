import { Bank, CreditCard, Money } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import Text from '@components/core/Text'

interface ButtonPaymentProps {
  children: React.ReactNode
  payment: 'credit' | 'debit' | 'money'
}

const ButtonPayment = ({ children, payment }: ButtonPaymentProps) => {
  const theme = useTheme()

  const iconsPayament = {
    credit: (
      <CreditCard
        size={22}
        color={theme.colors.purple}
      />
    ),
    debit: (
      <Bank
        size={22}
        color={theme.colors.purple}
      />
    ),
    money: (
      <Money
        size={22}
        color={theme.colors.purple}
      />
    )
  } as const

  return (
    <S.Button>
      {iconsPayament[payment]}
      <Text $scale={12} >{children}</Text>
    </S.Button>
  )
}

export default ButtonPayment
