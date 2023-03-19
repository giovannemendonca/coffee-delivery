import { GlobalStyle } from '@styles/global'
import { defaultTheme } from '@styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <div style={{padding: '0 8px'}}>
          <Router />
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
