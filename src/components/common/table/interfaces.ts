import React from 'react'
import { FlexProps  } from 'theme-ui'

export interface ITable extends FlexProps {
  columns: ITableColumn[]
  subRowComponent?: (data: any) => React.ReactNode
  dataSource: any[]
  loading?: boolean
  scrollbarsStyle?: any
  tableHeaderStyle?: any
  tableHeaderVariant?: any

  sortable?: boolean
  defaultSortHeader?: string
  activeRow?: boolean
  mobile?: boolean
  loadingNumRows?: number | any
  mobileHasButtons?: boolean
  tabletHasTable?: boolean
  noRecords?: React.ReactNode
}

export interface ITableColumn {
  key: number | string
  title?: string // Required
  dataIndex?: string // Required
  width?: string // percent or pixesl eg. 20% | 250px
  align?: 'left' | 'center' | 'right'
  sortBy?: string | undefined
  hideSort?: boolean
  styles?: any 
  Render?: (data: any, index: number, loading?: boolean) => React.ReactNode
}

export interface IThumbStyle {
  style: any
}
