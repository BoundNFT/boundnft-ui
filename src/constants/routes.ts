import { IPermalink, IRoutes } from './types'

export const permalink: IPermalink = {
  home: '/',
  collections: '/collections',
  governance: '/governance',
  documents: '/documents',
  createBoundNFT: '/collections/create'
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
    route: '/#',
    auth: false,
    external: false
  },
  {
    name: 'Documents',
    route: '/#',
    auth: false,
    external: false
  },
 
]

export default routes
