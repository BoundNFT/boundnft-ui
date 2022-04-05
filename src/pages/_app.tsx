import { ThemeProvider } from 'styled-components'
import useDefaultTheme, { GlobalStyle } from '../theme'
import type { AppProps } from 'next/app'
import Header from '../components/common/header'
import { Footer } from '../components/common/footer'
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'


export default function MyApp({ Component, pageProps }: AppProps) {
  const theme = useDefaultTheme()
  return (
    <I18nextProvider i18n={i18n} defaultNS='common'>
      <ThemeProvider theme={theme}>
        <GlobalStyle {...theme}/>
        <Header />
        <Component {...pageProps}/>
        <Footer />
      </ThemeProvider>
    </I18nextProvider>

  )
}
