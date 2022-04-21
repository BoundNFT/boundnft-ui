import { Contract } from '@ethersproject/contracts'
import { useMemo } from 'react'
import { OptionalMethodInputs, CallState, ListenerOptions, Call } from '../interfaces/multicall'
import { isValidMethodArgs, toCallState } from '../utils/multicall'
import { useCallsData } from './useCallsData'
import useWallet from './useWallet'

export function useSingleCallResult(
  contract: Contract | null | undefined,
  methodName: string,
  inputs?: OptionalMethodInputs,
  options?: ListenerOptions
): CallState {
  const { account, latestBlockNumber } = useWallet()
  const fragment = useMemo(() => contract?.interface?.getFunction(methodName), [contract, methodName])

  const calls = useMemo<Call[]>(() => {
    if (!account || fragment?.inputs?.length !== inputs?.length) return []
    return contract && fragment && isValidMethodArgs(inputs)
      ? [
          {
            address: contract.address,
            callData: contract.interface.encodeFunctionData(fragment, inputs)
          }
        ]
      : []
  }, [account, contract, fragment, inputs])

  const result = useCallsData(calls, options)[0]

  return useMemo(() => {
    return toCallState(result, contract?.interface, fragment, latestBlockNumber)
  }, [result, contract, fragment, latestBlockNumber])
}
