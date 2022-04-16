import React, { isValidElement } from 'react'
import _ from 'lodash'
// Components
// iterfaces
import { ITable, ITableColumn } from './interfaces'
import { useTranslation } from 'react-i18next'
import { Flex, Box, Text } from 'theme-ui'
import useResponsive from '../../../hooks/common/useResponsive'
import { SkeletonLine } from '../skeleton'
import SpacerDash from '../../../theme/ui/common/spacer-dash'

const SORT_DIRECTION: {
  [x: string]: 'asc' | 'desc'
} = {
  ASC: 'asc',
  DESC: 'desc'
}

const Table: React.FC<ITable> = ({
  columns,
  // subRowComponent,
  dataSource,
  loading,
  loadingNumRows = 5,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // scrollbarsStyle,
  tableHeaderStyle,
  tableHeaderVariant,
  sortable,
  defaultSortHeader = '',
  mobile,
  mobileHasButtons = false,
  tabletHasTable = false,
  noRecords,
  ...restprops
}) => {
  const [defaultWidth, setDefaultWidth] = React.useState<number>(0)
  const [sortHeader, setSortHeader] = React.useState<string | undefined>(columns[0]?.sortBy)
  const [sortDirection, setSortDirection] = React.useState<'asc' | 'desc'>(SORT_DIRECTION.ASC)

  const { isTablet, isLaptop } = useResponsive()

  // const [selected, setSelected] = useState<any[]>([])
  const { t } = useTranslation('common')

  React.useEffect(() => {
    if (!columns.length) return
    setDefaultWidth(100 / columns.length)
  }, [columns.length])

  React.useEffect(() => {
    if (!defaultSortHeader) return
    setSortHeader(defaultSortHeader)
  }, [defaultSortHeader])

  const mobileColumns = React.useMemo(() => {
    const header = _.slice(columns, 0, 2)
    const content = mobileHasButtons ? _.slice(columns, 2, -1) : _.slice(columns, 2)
    const footer = mobileHasButtons ? [_.last(columns)] : null

    return {
      header,
      content,
      footer
    }
  }, [columns, mobileHasButtons])

  return (
    <Flex variant='styles.table'>
      {(isLaptop || !mobile || (tabletHasTable ? isTablet : null)) && (
        <Flex variant={tableHeaderVariant ? tableHeaderVariant : 'styles.table-header'} {...tableHeaderStyle}>
          {columns &&
            columns.map((col: ITableColumn) => (
              <Box key={col.key} sx={{ flex: col.width ? `1 1 ${col.width}` : `1 1 ${defaultWidth}%`, ...col.styles }}>
                {sortable ? (
                  <Flex
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: !col.align ? 'flex-start' : col.align === 'left' ? 'flex-start' : col.align === 'right' ? 'flex-end' : 'center'
                    }}
                  >
                    {col?.hideSort ? (
                      <Text as='span'>{col.title}</Text>
                    ) : (
                      <>
                        <Text
                          as='span'
                          onClick={() => {
                            setSortHeader(col?.sortBy)
                            setSortDirection(SORT_DIRECTION.ASC)
                          }}
                          sx={{ cursor: !col?.hideSort ? 'pointer' : 'default', ...col.styles }}
                        >
                          {col.title}
                        </Text>
                        {/* {sortHeader === col?.sortBy && (
                          <>
                            {sortDirection === SORT_DIRECTION.ASC ? (
                              <Text as='span' onClick={() => setSortDirection(SORT_DIRECTION.DESC)} sx={{ cursor: 'pointer' }} ml='3px'>
                                <ChevronUp height={rem('13px')} width={rem('13px')} />
                              </Text>
                            ) : (
                              <Text as='span' onClick={() => setSortDirection(SORT_DIRECTION.ASC)} sx={{ cursor: 'pointer' }} ml='3px'>
                                <ChevronDown height={rem('13px')} width={rem('13px')} />
                              </Text>
                            )}
                          </>
                        )} */}
                      </>
                    )}
                  </Flex>
                ) : (
                  <Flex
                    sx={{ justifyContent: !col.align ? 'flex-start' : col.align === 'left' ? 'flex-start' : col.align === 'right' ? 'flex-end' : 'center' }}
                  >
                    <Text sx={{ textAlign: col.align }}>{col.title}</Text>
                  </Flex>
                )}
                <Flex sx={{ width: '100%', pt: 15 }}>
                  <SpacerDash bgColor='grey.100' height={3} />
                </Flex>
              </Box>
            ))}
        </Flex>
      )}
      {loading ? (
        // ...Array(loadingNumRows)
        [loadingNumRows.keys()].map((index: number) => (
          <Flex key={`table-skeleton-${index}`} variant={tableHeaderVariant ? tableHeaderVariant : 'styles.table-row'} {...tableHeaderStyle} minHeight={82}>
            {columns &&
              columns.map((col: ITableColumn) => (
                <Box key={col.key} sx={{ flex: col.width ? `1 1 ${col.width}` : `1 1 ${defaultWidth}%`, ...col.styles }}>
                  <Text sx={{ textAlign: col.align }}>
                    <SkeletonLine sx={{ height: 24, width: 'calc(100% / 2)', borderRadius: 8 }} />
                  </Text>
                </Box>
              ))}
          </Flex>
        ))
      ) : !loading && !dataSource.length ? (
        isValidElement(noRecords) ? (
          noRecords
        ) : (
          <Flex sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}>
            {/*      <IconError color='grey.300' size={32} /> */}
            <Box color='grey.300' sx={{ fontSize: 'body', mt: 20 }}>
              {t('label.no-records')}
            </Box>
          </Flex>
        )
      ) : (
        <>
          {(isLaptop || !mobile || (tabletHasTable ? isTablet : null)) && dataSource?.length > 0 && (
            <Box {...restprops}>
              <Flex sx={{ flexDirection: 'column', position: 'relative' }}>
                {_.orderBy(dataSource, [sortHeader], [sortDirection])?.map((source: any, i: number) =>
                  _.isArray(source)
                    ? source?.map(
                        (data: any) =>
                          !data?.hide && (
                            <Flex sx={{ flexDirection: 'column' }} key={data?.key}>
                              <Flex sx={{ width: 30, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                {/*  {selected === source ? <ChevronUp /> : <ChevronDown />} */}
                              </Flex>
                              {columns &&
                                columns?.map((col: ITableColumn) => (
                                  <Box key={col?.key} sx={{ flex: col?.width ? `1 1 ${col?.width}` : `1 1 ${defaultWidth}%`, ...col.styles }}>
                                    {col?.Render ? col?.Render(data, i, loading) : <Text sx={{ textAlign: col.align }}>{data[col.dataIndex!]}</Text>}
                                  </Box>
                                ))}
                            </Flex>
                          )
                      )
                    : !source?.hide && (
                        <React.Fragment key={source?.key}>
                          <Flex variant={'styles.table-row'} backgroundColor={source.active || source.active === undefined ? 'transparent' : 'transparent'}>
                            {columns &&
                              columns.map((col: ITableColumn) => (
                                <Box key={col?.key} sx={{ flex: col?.width ? `1 1 ${col?.width}` : `1 1 ${defaultWidth}%`, ...col.styles }}>
                                  {col?.Render ? col?.Render(source, i, loading) : <Text sx={{ textAlign: col?.align }}>{source?.[col.dataIndex!]}</Text>}
                                </Box>
                              ))}
                          </Flex>
                          <Flex sx={{ width: '100%', my: 15, opacity: 0.5, ':last-child': { width: 0, height: 0, my: 0, mt: 3 } }}>
                            <SpacerDash bgColor='grey.100' height={1} />
                          </Flex>
                        </React.Fragment>
                      )
                )}
              </Flex>
              <Flex sx={{ width: '100%' }}>
                <SpacerDash bgColor='grey.100' height={3} />
              </Flex>
            </Box>
          )}
          {!tabletHasTable && mobile && isTablet && !isLaptop && dataSource?.length > 0 && (
            <Box {...restprops}>
              {_.orderBy(dataSource, [sortHeader], [sortDirection])?.map((source: any, i: number) =>
                _.isArray(source)
                  ? source?.map(
                      (data: any) =>
                        !data?.hide && (
                          <Flex sx={{ flexDirection: 'column' }} key={data?.key}>
                            <Flex sx={{ width: 30, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                              {/*  {selected === source ? <ChevronUp /> : <ChevronDown />} */}
                            </Flex>
                            {columns &&
                              columns?.map((col: ITableColumn) => (
                                <Box key={col?.key} sx={{ flex: col?.width ? `1 1 ${col?.width}` : `1 1 ${defaultWidth}%`, ...col.styles }}>
                                  {col?.Render ? col?.Render(data, i, loading) : <Text sx={{ textAlign: col.align }}>{data[col.dataIndex!]}</Text>}
                                </Box>
                              ))}
                          </Flex>
                        )
                    )
                  : !source?.hide && (
                      <React.Fragment key={source?.key}>
                        <Flex
                          sx={{
                            backgroundColor: source.active || source.active === undefined ? 'transparent' : 'transparent',
                            justifyContent: 'space-between'
                          }}
                          variant='styles.table-row'
                        >
                          <Box
                            sx={{
                              display: 'grid',
                              gridGap: 20,
                              gridTemplateColumns: 'repeat(3, minmax(160px, 1fr))',
                              py: 22
                            }}
                          >
                            <Flex sx={{ alignItems: 'center', ...mobileColumns.header[0].styles }}>
                              {mobileColumns.header[0].Render ? mobileColumns.header[0].Render(source, i, loading) : source?.[columns[0].dataIndex!]}
                              <Flex sx={{ flexDirection: 'column' }} ml={20}>
                                {mobileColumns.header[1].title && (
                                  <Box variant={'styles.table-header-column-mobile'} sx={{ textAlign: mobileColumns.header[1].align }}>
                                    {mobileColumns.header[1].title}
                                  </Box>
                                )}
                                {mobileColumns.header[1].Render ? mobileColumns.header[1].Render(source, i, loading) : source?.[columns[1].dataIndex!]}
                              </Flex>
                            </Flex>
                            {mobileColumns &&
                              mobileColumns.content &&
                              mobileColumns.content.map((col: ITableColumn) => (
                                <Flex key={col?.key} sx={{ ...col.styles }}>
                                  {col?.Render ? (
                                    <Flex sx={{ flexDirection: 'column' }}>
                                      {col.title && (
                                        <Box variant={'styles.table-header-column-mobile'} sx={{ textAlign: col.align }}>
                                          {col.title}
                                        </Box>
                                      )}
                                      {col?.Render(source, i, loading)}
                                    </Flex>
                                  ) : (
                                    <Text sx={{ textAlign: col.align }}>{source?.[col.dataIndex!]}</Text>
                                  )}
                                </Flex>
                              ))}
                          </Box>
                          <Flex sx={{ flex: '0 0 150px', alignItems: 'center' }}>
                            {mobileColumns &&
                              mobileColumns.footer &&
                              mobileColumns.footer.map((col: any) => (
                                <Flex key={col?.key} sx={{ flex: 1, justifyContent: 'flex-end', ...col.styles }}>
                                  {col?.Render ? (
                                    <Flex sx={{ flexDirection: 'column' }}>{col?.Render(source, i, loading)}</Flex>
                                  ) : (
                                    <Text sx={{ textAlign: col?.align }}>{source?.[col.dataIndex!]}</Text>
                                  )}
                                </Flex>
                              ))}
                          </Flex>
                        </Flex>
                      </React.Fragment>
                    )
              )}
            </Box>
          )}
          {mobile && !isTablet && dataSource?.length > 0 && (
            <Box {...restprops}>
              {_.orderBy(dataSource, [sortHeader], [sortDirection])?.map((source: any, i: number) =>
                _.isArray(source)
                  ? source?.map(
                      (data: any) =>
                        !data?.hide && (
                          <Flex sx={{ flexDirection: 'column' }} key={data?.key}>
                            <Flex sx={{ width: 30, alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                              {/*     {selected === source ? <ChevronUp /> : <ChevronDown />} */}
                            </Flex>
                            {columns &&
                              columns?.map((col: ITableColumn) => (
                                <Box key={col?.key} sx={{ flex: col?.width ? `1 1 ${col?.width}` : `1 1 ${defaultWidth}%`, ...col.styles }}>
                                  {col?.Render ? col?.Render(data, i) : <Text sx={{ textAlign: col.align }}>{data[col.dataIndex!]}</Text>}
                                </Box>
                              ))}
                          </Flex>
                        )
                    )
                  : !source?.hide && (
                      <React.Fragment key={source?.key}>
                        <Flex
                          variant='styles.table-row'
                          sx={{ backgroundColor: source.active || source.active === undefined ? 'transparent' : 'transparent', flexDirection: 'column' }}
                        >
                          <Flex sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', ...mobileColumns.header[0].styles }}>
                            <Flex sx={{ flexDirection: 'column', flex: 1 }}>
                              {mobileColumns.header[1].title && (
                                <Box variant={'styles.table-header-column-mobile'} sx={{ textAlign: mobileColumns.header[1].align }}>
                                  {mobileColumns.header[1].title}
                                </Box>
                              )}
                              {mobileColumns.header[1].Render ? mobileColumns.header[1].Render(source, i, loading) : source?.[columns[1].dataIndex!]}
                            </Flex>

                            <Flex sx={{ flex: 1, justifyContent: 'flex-end' }}>
                              {mobileColumns.header[0].Render ? mobileColumns.header[0].Render(source, i, loading) : source?.[columns[0].dataIndex!]}
                            </Flex>
                          </Flex>

                          <Box
                            sx={{
                              display: 'grid',
                              gridGap: 4,
                              gridTemplateColumns: 'repeat(1, minmax(128px, 1fr))',
                              py: 22,
                              width: '100%'
                            }}
                          >
                            {mobileColumns &&
                              mobileColumns.content &&
                              mobileColumns.content.map((col: ITableColumn) => (
                                <Flex
                                  key={col?.key}
                                  sx={{
                                    flex: 1,
                                    ...col.styles
                                  }}
                                >
                                  {col?.Render ? (
                                    <Flex sx={{ justifyContent: 'space-between', width: '100%' }}>
                                      {col.title && (
                                        <Box variant={'styles.table-header-column-mobile'} sx={{ textAlign: col?.align }}>
                                          {col.title}
                                        </Box>
                                      )}
                                      {col?.Render(source, i, loading)}
                                    </Flex>
                                  ) : (
                                    <Text sx={{ textAlign: col?.align }}>{source?.[col.dataIndex!]}</Text>
                                  )}
                                </Flex>
                              ))}
                          </Box>

                          <Flex>
                            {mobileColumns &&
                              mobileColumns.footer &&
                              mobileColumns.footer.map((col: any) => (
                                <Flex key={col?.key} sx={{ flex: 1, justifyContent: 'flex-end', ...col.styles }}>
                                  {col?.Render ? (
                                    <Flex sx={{ flexDirection: 'column' }}>{col?.Render(source, i, loading)}</Flex>
                                  ) : (
                                    <Text sx={{ textAlign: col?.align }}>{source?.[col.dataIndex!]}</Text>
                                  )}
                                </Flex>
                              ))}
                          </Flex>
                        </Flex>
                      </React.Fragment>
                    )
              )}
            </Box>
          )}
        </>
      )}
    </Flex>
  )
}

export default Table
