import axios from 'axios'
import { API_ENDPOINTS, DEFAULT_CHAIN_ID } from 'modules/wallet/constants'

export default async function getOpenseaCollection(address: string) {
  return axios.get(`${API_ENDPOINTS[DEFAULT_CHAIN_ID].OPENSEA_API}/api/v1/asset_contract/${address}`)
}
