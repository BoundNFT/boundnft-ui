import React from 'react'
import { useMediaQuery } from 'react-responsive'

/**
 * Interfaces & types
 */
export interface IState {
  isDesktop: boolean
  isLaptop: boolean
  isTablet: boolean
  isMobile: boolean
  /*   isPortrait: boolean */
}

/** @constant {IState} */
const initialState: IState = {
  isDesktop: false,
  isLaptop: false,
  isTablet: false,
  isMobile: false
  /*   isPortrait: false */
}

/**
 * Responsive context init
 * @param initialState
 */
export const ResponsiveContext = React.createContext<IState>(initialState)

/**
 * ResponsiveContextProvider
 * @param {ReactElement} children
 * @return {ReactElement}
 */
const ResponsiveContextProvider: React.FC = ({ children }): React.ReactElement => {
  const isMobile = useMediaQuery({
    query: `(min-width: 375px)`
  })
  const isTablet = useMediaQuery({
    query: `(min-width: 768px)`
  })
  const isLaptop = useMediaQuery({
    query: `(min-width: 1024px)`
  })
  const isDesktop = useMediaQuery({
    query: `(min-width: 1366px)`
  })
  /*   const isPortrait = useMediaQuery({
    query: '(orientation: portrait)'
  }) */

  return (
    <ResponsiveContext.Provider
      value={{
        isDesktop,
        isLaptop,
        isTablet,
        isMobile
        /* isPortrait */
      }}
    >
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveContextProvider
