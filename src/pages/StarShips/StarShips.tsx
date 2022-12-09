import { LayoutPages, ListContainer, Loading, PaginationButtons, SearchBar } from '@/components'
import { getRespData, getSearchedData, getSearchedDataPage } from '@/redux/features/slices/starships/starshipsDataSlice'
import { useAppDispatch, useAppSelector } from '@/redux/app'
import { useEffect, useState } from 'react'

const Starships = () => {
  const starships = useAppSelector((state) => state.starshipsData)
  const dispatch = useAppDispatch()

  const [page, setPage] = useState(1)
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    if (searchResults.length === 0) {
      dispatch(getRespData(page))
    } else {
      dispatch(getSearchedDataPage(page))
    }
  }, [page])

  useEffect(() => {
    if (searchResults.length > 0) {
      dispatch(getSearchedData(searchResults))
    } else {
      dispatch(getRespData(page))
    }
  }, [searchResults])

  const { dataStarships, isLoading } = starships

  const { results, next } = dataStarships
  return (
    <LayoutPages title='NAVES ESTELARES'>
      <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} />
      {isLoading ? <Loading /> : <ListContainer results={results} />}
      <PaginationButtons page={page} setPage={setPage} next={next} />
    </LayoutPages>
  )
}
export default Starships