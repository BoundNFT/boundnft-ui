export interface IUseTheme {
    [x: string]: any
  }

  export interface IRoutes extends IRoute {
    children?: IRoute[]
  }

  interface IRoute {
    name: string
    route: string
    auth?: boolean
    external?: boolean
    onClick?: any
    soon?: boolean
  }

  export interface IPermalink {
    [x: string]: string
  }
  