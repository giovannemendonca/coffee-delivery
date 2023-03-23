import { ReactNode } from 'react'
import * as S from './styles'

import Text from '@src/components/core/Text'
import { Trash } from 'phosphor-react'

interface Props {
  children: ReactNode
  onClick: () => void
}

const ButtonRemove = ({ children, onClick }: Props) => {
  return (
    <S.Button
      type='button'
      onClick={onClick}
    >
      <Trash />
      <Text $scale={10}>{children}</Text>
    </S.Button>
  )
}

export default ButtonRemove
