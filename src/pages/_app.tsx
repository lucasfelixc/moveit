import GlobalStyle from '../styles/Global'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/Theme'

import { ChallengesProvider } from '../contexts/ChallengesContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </ChallengesProvider>
  )
}

export default MyApp
