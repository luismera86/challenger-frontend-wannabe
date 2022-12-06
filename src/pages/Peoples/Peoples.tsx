import { LayoutPages, ListContainer, SearchBar } from '../../components'

import { PeoplesProvider } from './context'
import { getPeoples } from '../../redux/features/peoples/peoplesSlice'
import { useAppDispatch } from '../../redux/app/hooks'
import { useAppSelector } from '../../redux/app'
import { useEffect } from 'react'

const Peoples = () => {
  const peoples = useAppSelector((state) => state.peoples)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getPeoples())
  }, [])
  console.log(peoples)
  // Todo poner un useEffect para que haga el get y setear en state
  return (
    <PeoplesProvider>
      <LayoutPages title='PERSONAJES'>
        <SearchBar />
        {/* <ListContainer data={peoples} /> */}
      </LayoutPages>
    </PeoplesProvider>
  )
}
export default Peoples
