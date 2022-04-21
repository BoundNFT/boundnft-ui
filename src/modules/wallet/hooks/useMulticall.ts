import { useContext } from 'react'

import { MulticallContext } from '../context/multicall'

export function useMulticall(): any {
  const context = useContext(MulticallContext)
  return context
}
