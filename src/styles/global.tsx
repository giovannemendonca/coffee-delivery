import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        line-height: 130%;
    }
    body{
        width: 85%;
        margin: 0 auto;
        min-width: 280px;
        max-width: 1600px;
        ::-webkit-scrollbar {
            display: none;
        }
        
        @media(max-width: 900px){
            width: 100%;
         
        }
    }
    body, input, textarea, button {
        font-family:  ${({ theme }) =>
          theme.typography.fontFamily.text}, sans-serif;
        font-weight: 400;
        font-size:  1rem;
        background: ${({ theme }) => theme.colors.background};

        @media(max-width: 1000px){
            font-size: 0.8rem;
        }
    }


`
