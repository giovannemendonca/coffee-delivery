import React from 'react'
import styled, { css } from 'styled-components'
import {defaultTheme} from '@styles/themes/default'

interface Props {
  $bold?: boolean
  $scale?: keyof typeof defaultTheme.typography.fontSize
}

const Text = styled.p<Props>`
  ${({theme, $bold, $scale}) => css`
    ${$bold && `font-weight : ${theme.typography.fontWeight.bold}`};
    ${$scale && `font-size: ${theme.typography.fontSize[$scale]}`}
  `}
`

export default Text