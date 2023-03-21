import React from 'react'
import Text from '@components/core/Text'
import * as S from './styles'

interface Props {
  children: React.ReactNode
}

export const ButtonText = ({children}: Props) => {
  return (
    <S.ButtonDefault type='submit'>
      <Text $bold $scale={12}>{children}</Text>
    </S.ButtonDefault>
  )
}

