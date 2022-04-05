import React from 'react'
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { rem } from 'polished'
import fonts from './fonts'
import { IUseTheme } from '../constants/types'
import { DarkTheme, LightTheme } from './colors'

/* import lightTheme from './colors/light' */


const useDefaultTheme = (): DefaultTheme => {
  const breakpoints: string[] = React.useMemo(() => ['375px', '768px', '1024px', '1366px', '1440px'], [])
  const darkMode = React.useMemo(() => false, [])
  const fonts = React.useMemo(
    () => ({
      bold: "'code_boldregular'",
      light: "'code_lightregular'",
    }),
    [],
  )
  const fontWeight = React.useMemo(
    () => ({
      regular: 400,
      bold: 700,
    }),
    [],
  )

  const fontSizes = React.useMemo(
    () => ({
      xs: rem('12px'),
      sm: rem('14px'),
      lg: rem('16px'),
      xxxl: rem('64px'),
      xxl: rem('32px'),
      xl: rem('24px'),
    }),
    [],
  )

  return {
    breakpoints,
    darkMode,
    colors: LightTheme,
    fonts,
    fontWeight,
    fontSizes,
    lineHeights: fontSizes,
    variants: {
      'title-white': {
        fontSize: fontSizes.xxxl,
        color: 'white',
        fontFamily: fonts.light,
        letterSpacing: '3px'
      },
      'title-bold-white': {
        fontSize: fontSizes.xxxl,
        color: 'white',
        fontFamily: fonts.bold,
        fontWeight: fontWeight.bold,
        letterSpacing: '3px'
      },
      'title-bold-green': {
        fontSize: fontSizes.xxxl,
        color: 'green.100',
        fontFamily: fonts.bold,
        fontWeight: fontWeight.bold,
        letterSpacing: '3px'

      },
      'semi-title-white': {
        fontSize: fontSizes.xxl,
        color: 'white',
        fontFamily: fonts.light,
      },
      'semi-title-bold-white': {
        fontSize: fontSizes.xxl,
        fontWeight: fontWeight.bold,
        color: 'white',
        fontFamily: fonts.bold,
      },
      'body': {
        fontSize: fontSizes.lg,
        fontWeight: fontWeight.bold,
        color: 'grey.100',
        fontFamily: fonts.bold,
        letterSpacing: '1px'
      },
      'nav-buttons-text': {
        fontSize: fontSizes.sm,
        fontWeight: fontWeight.bold,
        color: 'grey.100',
        fontFamily: fonts.light,
      },
      'mid-title-white': {
        fontSize: fontSizes.xl,
        color: 'white',
        fontFamily: fonts.light,
      },
      'body-xs': {
        fontSize: fontSizes.xs,
        fontFamily: fonts.bold,
        letterSpacing: '1px',      
        lineHeight: '25px',
      }

      
    }
  }}

  export const GlobalStyle = createGlobalStyle<IUseTheme>`
  /* Fonts */
  ${fonts}

  html {
    font-family: ${({ fonts }) => fonts.body};
    font-weight: ${({ fontWeight }) => fontWeight.medium};
    font-size: 14px;
    touch-action: none;
    letter-spacing: 2px;
  }

  body {
    font-family: ${({ fonts }) => fonts.body};
    font-weight: ${({ fontWeight }) => fontWeight.light};
    font-size: 16px;
    touch-action: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  `


export default useDefaultTheme
