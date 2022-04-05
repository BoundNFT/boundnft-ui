import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { IUseTheme } from '../../constants/types'

const useTheme = (): IUseTheme => useContext(ThemeContext)
export default useTheme
