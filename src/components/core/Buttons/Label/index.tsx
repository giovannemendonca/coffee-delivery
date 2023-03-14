import React from 'react'
import Text from '@components/core/Text'
import * as S from './styles'

interface Props {
  children: React.ReactNode
}

export const Button = ({children}: Props) => {
  return (
    <S.ButtonDefault>
      <Text $bold $scale={12}>{children}</Text>
    </S.ButtonDefault>
  )
}

