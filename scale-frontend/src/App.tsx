import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Routes from './routes'
import Spinner from './components/Spinner/Spinner'
import GlobalStyles from './styles/global'
const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Spinner />}>
        <GlobalStyles />
        <Routes />
      </Suspense>
    </ThemeProvider>
  )
}

export default App