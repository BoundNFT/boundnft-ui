import { makeTheme } from '@theme-ui/css/utils'


export const theme = makeTheme({
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true,
    
  },
  fonts: {
    bold: "code_boldregular",
    light: "code_lightregular",
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },

  fontSizes: [
    12, 14, 16, 24, 32, 64
  ],

  colors:  {
    body: '#fff',
    white: '#fff',
    background: '#242F3F',
    green: {
      100: '#C0FF00',
    },
    grey: {
      100: '#6E8197'
    },
    blue: {
      100: '#242F3F',
      200: '#1A2430',
      300: '#060A10',
    }
  
  },


  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
      p: 4,
    },
    a: {
      color: 'primary',
      fontWeight: 'bold',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    
    'title-white': {
      fontSize: 64,
      color: 'white',
      fontFamily: 'light',
      letterSpacing: '1.5px'
    },
    'title-bold-white': {
      fontSize: 64,
      color: 'white',
      fontFamily: 'bold',
      fontWeight: 'bold',
      letterSpacing: '1.5px'
    },
    'title-bold-green': {
      fontSize: 64,
      color: 'green.100',
      fontFamily: 'bold',
      fontWeight: 'bold',
      letterSpacing: '3px'

    }, 
    'semi-title-white': {
      fontSize: 32,
      color: 'white',
      fontFamily: 'light',
    },
    'logo-text': {
      fontSize: 21,
      color: 'white',
      fontFamily: 'light',
    },
    'logo-text-bold': {
      fontSize: 21,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'bold',
    },
    'semi-title-bold-white': {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'white',
      fontFamily: 'bold',
    },
    'body': {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'grey.100',
      fontFamily: 'bold',
      letterSpacing: '1.2px'
    },
    'nav-buttons-text': {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'grey.100',
      fontFamily: 'light',
    },
    'mid-title-white': {
      fontSize: 24,
      color: 'white',
      fontFamily: 'bold'
    },
    'body-xs': {
      fontSize: 12,
      fontFamily: 'bold',
      letterSpacing: '0.6px',      
      lineHeight: '25px',
    }
  },

  buttons: {
    primary: {
      cursor: 'pointer',
    },
  },
  

  
})
