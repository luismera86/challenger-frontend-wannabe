import { LayoutPages, PaginationButtons, SearchBar } from '../../components'
import { getPeoples, getSearchedPeople, getSearchedPeoplePage } from '../../redux/features/peoples/peoplesSlice'
import { getRespData, getSearchedData, getSearchedDataPage } from '../../redux/features/respData/respDataSlice'
import { useEffect, useState } from 'react'

import { ListPeopleContainer } from './components'
import { PeoplesProvider } from './context'
import { useAppDispatch } from '../../redux/app/hooks'
import { useAppSelector } from '../../redux/app'

const Peoples = () => {
  const peoples = useAppSelector((state) => state.data)
  const dispatch = useAppDispatch()

  const { results } = peoples

  const [page, setPage] = useState(1)
  const [searchResults, setSearchResults] = useState('')
// todo revisar el tipado para hacer un slice generico la diferencia con film

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
