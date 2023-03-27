import React from 'react'
import Text from '@components/core/Text'
import * as S from './styles'

interface Props {
  children: React.ReactNode
  isDisabled?: boolean
}

export const ButtonText = ({children, isDisabled}: Props) => {
  return (
    <S.ButtonDefault disabled={isDisabled} type='submit'>
      <Text $bold $scale={12}>{children}</Text>
    </S.ButtonDefault>
  )
}

