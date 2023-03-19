import React from 'react'
import * as S from './styles'

const ButtonCounter = () => {
  return (
    <S.Container>
        <button>-</button>
        <span>5</span>
        <button>+</button>
    </S.Container>
  )
}

export default ButtonCounter