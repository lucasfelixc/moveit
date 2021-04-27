import { AppProps } from 'next/app'

import GlobalStyle from '../styles/Global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
