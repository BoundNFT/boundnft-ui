interface errorInterface {
  errorMessage: string
}

const contractErrorCodes: {
  [key: string]: any
} = {
  '301': 'Amount must be greater than 0',
  '302': 'Action requires an active reserve',
  '303': 'Action cannot be performed because the reserve is frozen',
  '304': 'User cannot withdraw more than the available balance',
  '305': 'Borrowing is not enabled',
  '306': 'The collateral balance is 0',
  '307': 'Health factor is lesser than the liquidation threshold',
  '308': 'There is not enough collateral to cover a new borrow',
  '309': 'for repayment of stable debt, the user needs to have stable debt, otherwise, he needs to have variable debt',
  '310': 'VL_NO_ACTIVE_NFT',
  '311': 'VL_NFT_FROZEN',
  '312': 'User did not borrow the specified currency',
  '400': 'The caller of the function is not the lending pool configurator',
  '401': 'Pool is paused',
  '402': 'LP_NO_MORE_RESERVES_ALLOWED',
  '403': 'LP_NOT_CONTRACT',
  '404': 'LP_BORROW_NOT_EXCEED_LIQUIDATION_THRESHOLD',
  '405': 'LP_BORROW_IS_EXCEED_LIQUIDATION_PRICE',
  '406': 'LP_NO_MORE_NFTS_ALLOWED',
  '409': 'LP_NFT_IS_NOT_USED_AS_COLLATERAL',
  '414': 'LP_AMOUNT_LESS_THAN_EXTRA_DEBT',
  '480': 'LPL_INVALID_LOAN_STATE',
  '481': 'LPL_INVALID_LOAN_AMOUNT',
  '482': 'LPL_INVALID_TAKEN_AMOUNT',
  '483': 'LPL_AMOUNT_OVERFLOW',
  '484': 'LPL_BID_PRICE_LESS_THAN_LIQUIDATION_PRICE',
  '485': 'LPL_BID_PRICE_LESS_THAN_HIGHEST_PRICE',
  '486': 'LPL_BID_REDEEM_DURATION_HAS_END',
  '487': 'LPL_BID_USER_NOT_SAME',
  '488': 'LPL_BID_REPAY_AMOUNT_NOT_ENOUGH',
  '489': 'LPL_BID_REDEEM_DURATION_HAS_END',
  '490': 'LPL_BID_AUCTION_DURATION_NOT_END',
  '491': 'LPL_BID_PRICE_LESS_THAN_BORROW',
  '492': 'LPL_INVALID_BIDDER_ADDRESS',
  '493': 'LPL_AMOUNT_LESS_THAN_BID_FINE'
}

export const handleError = ({ errorMessage }: errorInterface) => {
  if (!errorMessage?.includes('execution reverted: ')) return errorMessage
  const errorCode = errorMessage.replace('execution reverted: ', '')
  return contractErrorCodes[errorCode] ?? errorMessage
}
