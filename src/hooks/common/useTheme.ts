import { ThemeContext } from '@emotion/react'
import { useContext } from 'react'

import { IUseTheme } from '../../constants/types'

const useTheme = (): IUseTheme => useContext(ThemeContext)
export default useTheme
