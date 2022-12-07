import { LayoutPages, PaginationButtons, SearchBar } from '../../components'
import { getPeoples, getSearchedPeople, getSearchedPeoplePage } from '../../redux/features/peoples/peoplesSlice'
import { useEffect, useState } from 'react'

import { ListPeopleContainer } from './components'
import { PeoplesProvider } from './context'
import { useAppDispatch } from '../../redux/app/hooks'
import { useAppSelector } from '../../redux/app'

const Peoples = () => {
  const peoples = useAppSelector((state) => state.peoples)
  const dispatch = useAppDispatch()

  const { results } = peoples

  const [page, setPage] = useState(1)
  const [searchResults, setSearchResults] = useState('')

  useEffect(() => {
    if (searchResults.length === 0) {
      dispatch(getPeoples(page))
    } else {
      dispatch(getSearchedPeoplePage(page))
    }
  }, [page])

  useEffect(() => {
    if (searchResults.length > 0) {
      dispatch(getSearchedPeople(searchResults))
      
    } else {
      dispatch(getPeoples(page))
    }
  }, [searchResults])

  return (
    <PeoplesProvider>
      <LayoutPages title='PERSONAJES'>
        <SearchBar searchResults={searchResults} setSearchResults={setSearchResults} />
        <ListPeopleContainer results={results} count={0} next={null} previous={null} />
        <PaginationButtons page={page} setPage={setPage} next={peoples.next} />
      </LayoutPages>
    </PeoplesProvider>
  )
}
export default Peoples
