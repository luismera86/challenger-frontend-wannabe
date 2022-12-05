import { LayoutPages, ListContainer, SearchBar } from '../../components'

import { PeoplesProvider } from './context'

const Peoples = () => {


  return (
    <PeoplesProvider>
      <LayoutPages title='PERSONAJES'>
        <SearchBar />
        <ListContainer />
      </LayoutPages>
    </PeoplesProvider>
  )
}
export default Peoples
