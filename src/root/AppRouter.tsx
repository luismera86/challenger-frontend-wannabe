import { Home, People } from '../pages'
import { Route, Routes } from 'react-router'

import { NavBar } from '../components'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people' element={<People />} />
        
      </Routes>
    </>
  )
}
export default AppRouter
