import { ReactNode } from 'react'
import * as S from './styles'

import Text from '@src/components/core/Text'
import { Trash } from 'phosphor-react'

interface Props {
  children: ReactNode
}

const ButtonRemove = ({ children }: Props) => {
  return (
    <S.Button>
      <Trash />
      <Text $scale={12}>{children}</Text>
    </S.Button>
  )
}

export default ButtonRemove
