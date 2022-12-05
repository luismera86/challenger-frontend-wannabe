import { Home, Peoples } from '../pages'
import { Route, Routes } from 'react-router'

import { NavBar } from '../components'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people' element={<Peoples />} />
        
      </Routes>
    </>
  )
}
export default AppRouter
