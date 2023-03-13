import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        width: 85%;
        margin: 0 auto;
        min-width: 280px;
        @media(max-width: 350px){
            width: 100%;
            padding: 0 8px;
        }
    }
    body, input, textarea, button {
        font-family:  ${({ theme }) => theme.source.text}, sans-serif;
        font-weight: 400;
        font-size:  1rem;
        background: ${({ theme }) => theme.colors.background};
    }


`
