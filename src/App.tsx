import Header from '@components/Header'
import Home from '@pages/Home'
import { GlobalStyle } from '@styles/global'
import { defaultTheme } from '@styles/themes/default'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffee Delivery</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
