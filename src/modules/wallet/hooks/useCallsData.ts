import { useEffect, useMemo } from 'react'
import { CallResult, Call, ListenerOptions } from '../interfaces/multicall'
import { parseCallKey, toCallKey } from '../utils/multicall'
import { useMulticall } from './useMulticall'
import useWallet from './useWallet'

const INVALID_RESULT: CallResult = {
  valid: false,
  blockNumber: undefined,
  data: undefined
}

const showDebug = false

// the lowest level call for subscribing to contract data
export function useCallsData(calls: (Call | undefined)[], options?: ListenerOptions): CallResult[] {
  const { network: { chainId }, latestBlockNumber } = useWallet()
  const { MulticallDispatch, callResults, callListeners } = useMulticall()
  if (showDebug) console.log('useCallsData init calls', JSON.stringify(calls))
  if (showDebug) console.log('useCallsData init callResults', JSON.stringify(callResults))
  if (showDebug) console.log('useCallsData init callListeners', JSON.stringify(callListeners))
  //const callResults:any = {}
  //const dispatch:any = {}
  //const callResults = useSelector<AppState, AppState['multicall']['callResults']>(state => state.multicall.callResults)
  //const dispatch = useDispatch<AppDispatch>()

  const serializedCallKeys: string = useMemo(
    () =>
      JSON.stringify(
        calls
          ?.filter((c): c is Call => Boolean(c))
          ?.map(toCallKey)
          ?.sort() ?? []
      ),
    [calls]
  )

  // update listeners when there is an actual change that persists for at least 100ms
  useEffect(() => {
    const callKeys: string[] = JSON.parse(serializedCallKeys)
    if (!chainId || callKeys.length === 0) return undefined
    const calls = callKeys.map(key => parseCallKey(key))
    if (showDebug) console.log('useCallsData useEffect calls = serializedCallKeys', calls)
    if (showDebug) console.log('useCallsData useEffect callListeners', callListeners)
    if (showDebug) console.log('useCallsData useEffect options')

    const listeners = callListeners ?? {}
    listeners[chainId] = listeners[chainId] ?? {}
    const blocksPerFetch = options?.blocksPerFetch ? options.blocksPerFetch : 1
    const callback = options?.callback
    calls.forEach(call => {
      const callKey = toCallKey(call)
      listeners[chainId][callKey] = listeners[chainId][callKey] ?? {}
      listeners[chainId][callKey].blocksPerFetch = blocksPerFetch
      listeners[chainId][callKey].callback = callback
    })

    if (showDebug) console.log('useCallsData useEffect UPDATE listeners', listeners)
    MulticallDispatch({
      type: 'UPDATE',
      payload: {
        callListeners: listeners
      }
    })
    /*
    dispatch(
      addMulticallListeners({
        chainId,
        calls,
        options
      })
    )
*/
    return () => {
      const listeners = callListeners ?? {}
      if (showDebug)console.log('useCallsData useEffect removing callListeners:', JSON.stringify(callListeners))
      if (showDebug)console.log('useCallsData useEffect removing calls:', JSON.stringify(listeners), listeners[chainId])

      if (!listeners[chainId]) return
      calls.forEach(call => {
        const callKey = toCallKey(call)
        if (!listeners[chainId][callKey]) return
        if (!listeners[chainId][callKey]['blocksPerFetch']) return
        delete listeners[chainId][callKey]
      })
      if (showDebug)console.log('useCallsData useEffect removing new listeners:', JSON.stringify(listeners))
      MulticallDispatch({
        type: 'UPDATE',
        payload: {
          callListeners: listeners
        }
      })
      /*
      dispatch(
        removeMulticallListeners({
          chainId,
          calls,
          options
        })
      )
      */
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, MulticallDispatch, callListeners, serializedCallKeys, options?.blocksPerFetch])

  return calls.map<CallResult>(call => {
          if (showDebug) console.log('useCallsData return calls call', JSON.stringify(call))
          if (!chainId || !call) return INVALID_RESULT
  
          if (showDebug) console.log('useCallsData return callResults ', JSON.stringify(callResults))
          if (showDebug) console.log('useCallsData return callResults[chainId] ', callResults[chainId])
          const result = callResults[chainId]?.[toCallKey(call)]
          const listener = callListeners?.[chainId]?.[toCallKey(call)]
          if (result?.data && !result?.fetchingBlockNumber && listener?.callback && latestBlockNumber === result?.blockNumber)
            listener.callback()
          let data
          if (result?.data && result?.data !== '0x') {
            data = result.data
          }
          return { valid: true, data, blockNumber: result?.blockNumber }
        })
}
