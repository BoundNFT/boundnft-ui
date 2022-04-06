import React from 'react'
import { IState, ResponsiveContext } from '../../components/context/responsive'


const useResponsive = (): IState => React.useContext(ResponsiveContext)
export default useResponsive
