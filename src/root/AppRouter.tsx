import { CharacterDetails, Characters, Home } from '@/pages'
import { Route, Routes } from 'react-router'

import { NavBar } from '@/components'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/charactersdetails' element={<CharacterDetails />} />
      </Routes>
    </>
  )
}
export default AppRouter
