import { LayoutPages, ListContainer, SearchBar } from '../../components'

import { PeopleProvider } from './context'

const People = () => {
  return (
    <PeopleProvider>
      <LayoutPages title='PERSONAJES'>
        <SearchBar />
        <ListContainer />
      </LayoutPages>
    </PeopleProvider>
  )
}
export default People
