import { makeTheme } from '@theme-ui/css/utils'
import React from 'react'


export const theme = makeTheme({
  config: {
    initialColorModeName: 'light',
    useColorSchemeMediaQuery: true,
    
  },

  breakpoints: ['375px', '768px', '1024px', '1366px', '1440px', '1600px'],

  fonts: {
    bold: "code_boldregular",
    light: "code_lightregular",
    
  },
/*   fontWeights: {
    body: 400,
    bold: 700,
  }, */

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
      400: '#2A3646',
    }
  
  },

  text : {
    'title-white': {
      fontSize: [34, 34, 44, 64],
      color: 'white',
      fontFamily: 'light',
      letterSpacing: '1.5px'
    },

    'title-bold-white': {
      fontSize: [34, 34, 44, 64],
      color: 'white',
      fontFamily: 'bold',
      letterSpacing: '1.5px'
    },

    'title-bold-green': {
      fontSize: [34, 34, 44, 64],
      color: 'green.100',
      fontFamily: 'bold',
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
      color: 'white',
      fontFamily: 'bold',
    },
    'semi-title-bold-white': {
      fontSize: 32,
      color: 'white',
      fontFamily: 'bold',
    },

    'body': {
      fontSize: 16,
      color: 'grey.100',
      fontFamily: 'bold',
      letterSpacing: '1.2px'
    },

    'nav-buttons-text': {
      fontSize: 14,
      color: 'grey.100',
      fontFamily: 'bold',
      fontWeight: 'bold',
    },

    'mid-title-white': {
      fontSize: 24,
      color: 'white',
      fontFamily: 'bold'
    },

    'body-xs': {
      fontSize: 12,
      fontFamily: 'bold',
      letterSpacing: '1px',      
      color: 'grey.100',
    },
  },

  frames : {
    'normal' : {
      width: '100%', 
      padding: 40, 
      backgroundColor: 'blue.400',
    },
    'image' : {
      alignItems: 'center',
      width: '100%',
      padding: 10,
      backgroundColor: 'blue.400'
    }
  },

  forms: {
    label: {
      fontSize: 12,
    },
    input: {
      border: '1px solid white',
      py: 24,
      px: 30,
      '&:focus': {
        boxShadow: t => `0 0 0 2px ${'black'}`,
        outline: '1px solid white',
      },
      color: 'white',
      fontSize: 16,
      fontFamily: 'bold',
      letterSpacing: '1px',
    },

  },
  
  styles: {
    root: {
      fontFamily: 'body',
      color: 'white',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      ':hover': {
        color: 'secondary',
        textDecoration: 'underline',
      },
    },
    
    table: {
      flexDirection: 'column',
      width: '100%',
      minWidth: 295,
      overflowY: 'auto',
      backgroundColor: 'transparent',
    },
    'table-header': {
      flexDirection: 'row',
      width: '100%',
      color: 'grey.100',
      py: 20,
      fontFamily: 'bold',
      maxHeight: 52,
      justifyContent: 'space-between',
      mb: 10
    },
    'table-row': {
      alignItems: 'center',
      fontSize: 13,
      fontFamily: 'bold',
      py: [10],
      width: '100%',  
      justifyContent: 'space-between',
    },
    
    'table-row-text': {
      color: 'white',
      fontFamily: 'bold',
      fontSize: 16,
    },
    'table-header-column-mobile': {
      fontSize: 14,
      color: 'white',
      alignItems: 'center',
      mt: '0.5px'
    },
  },

  buttons: {
    primary: {
      cursor: 'pointer',
    },
    'web3': {
      cursor: 'pointer',
      borderRadius: 0,
      backgroundColor: 'green.100',
      color: 'blue.300',
      fontSize: 14,
      fontFamily: 'fonts.bold',
      fontWeight: 'bold',
      px: 30,
      py: 10,
      width: '100%',
      height: 36,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      ":hover": {
        opacity: 0.5,
        transition: 'ease-in-out 0.1s',

      }
    }
  },
  

  
})

