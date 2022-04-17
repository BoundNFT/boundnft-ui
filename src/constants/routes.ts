import { BOUNDNFT_DOCS_LINK } from 'constants/index'
import { IPermalink, IRoutes } from './types'

export const permalink: IPermalink = {
  home: '/',
  collections: '/collections/',
  governance: 'https://snapshot.org/#/benddao.eth',
  documents: BOUNDNFT_DOCS_LINK,
  createBoundNFT: '/collections/create/'
}

const routes: IRoutes[] = [
  {
    name: 'Home',
    route: '/',
    auth: false,
    external: false
  },
  {
    name: 'Collections',
    route: '/collections',
    auth: false,
    external: false
  },
  {
    name: 'Governance',
    route: permalink.governance,
    auth: false,
    external: true
  },
  {
    name: 'Documents',
    route: permalink.documents,
    auth: false,
    external: true
  }
]

export default routes
