import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button {
        font-family:  ${({ theme }) => theme.source.text}, sans-serif;
        font-weight: 400;
        font-size:  1rem;
        background: ${({ theme }) => theme.colors.background};
    }


`
