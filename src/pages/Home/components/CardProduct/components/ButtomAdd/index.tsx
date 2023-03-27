import { ShoppingCart } from 'phosphor-react'
import * as S from './styles'

interface ButtonAddProps {
  onClick: () => void
  isAtive: boolean
}

const ButtonAdd = ({onClick, isAtive}: ButtonAddProps) => {

  return (
    <S.Button disabled={!isAtive} onClick={onClick}>
      <ShoppingCart  size={22} weight={'fill'}/>
    </S.Button>
  )
}

export default ButtonAdd