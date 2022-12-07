import { LayoutPages, ListContainer, Loading, PaginationButtons, SearchBar } from '../../components'
import { getRespData, getSearchedData, getSearchedDataPage } from '../../redux/features/respData/respDataSlice'
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks'
import { useEffect, useState } from 'react'

import { PeoplesProvider } from './context'

const Peoples = () => {
  const peoples = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()

  const [page, setPage] = useState(1)
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    if (searchResults.length === 0) {
      dispatch(getRespData(`/people/?page=${page}`))
    } else {
      dispatch(getSearchedDataPage(`/people/?search=l&page=${page}`))
    }
  }, [page])

  useEffect(() => {
    if (searchResults.length > 0) {
      dispatch(getSearchedData(`/people/?search=${searchResults}`))
    } else {
      dispatch(getRespData(`/people/?page=${page}`))
    }
  }, [searchResults])

  const { data, isLoading } = peoples

  const { results, next } = data

  return (
    <PeoplesProvider>
      <LayoutPages title='PERSONAJES'>
        <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} />
        {isLoading ? <Loading /> : <ListContainer results={results} />}
        <PaginationButtons page={page} setPage={setPage} next={next} />
      </LayoutPages>
    </PeoplesProvider>
  )
}
export default Peoples
