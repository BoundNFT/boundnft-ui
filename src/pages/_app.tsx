import { ThemeProvider } from 'theme-ui'
/* import useDefaultTheme, { GlobalStyle } from '../theme' */
import type { AppProps } from 'next/app'
import Header from '../components/common/header'
import { Footer } from '../components/common/footer'
import i18n from '../i18n'
import { I18nextProvider } from 'react-i18next'
import { Global, css } from '@emotion/react'
import { theme } from '../theme/theme'
import ResponsiveContextProvider from '../components/context/responsive'
import WalletContextProvider from 'modules/wallet/context/wallet'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WalletContextProvider>
      <I18nextProvider i18n={i18n} defaultNS='common'>
        <ThemeProvider theme={theme}>
          <Global
            styles={css`
            @font-face {
              font-family: 'code_boldregular';
              src: url('/assets/fonts/code_bold-webfont.woff2') format('woff2');
              src: url('/assets/fonts/code_bold-webfont.woff') format('woff'),
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'code_lightregular';
              src: url('/assets/fonts/code_light-webfont.woff2') format('woff2');
              src: url('/assets/fonts/code_light-webfont.woff') format('woff'),
              font-weight: normal;
              font-style: normal;
            } 
            a {
              text-decoration: none;
            }    
            a:hover {
              cursor: pointer;
            } 

            html {
              padding: 0px;
              margin: 0px;
              letter-spacing: 1.5px;
              font-family: 'code_boldregular';
              font-size: 12px;           
            }

            light-green {
              color: ${theme.colors.green[100]}
            }

            body {
              min-width: 360px;
              height: 100%;
            }

            p {}
          `}
          />

          <ResponsiveContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </ResponsiveContextProvider>
        </ThemeProvider>
      </I18nextProvider>
    </WalletContextProvider>
  )
}
