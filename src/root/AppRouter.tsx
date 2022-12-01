import { Route, Routes } from 'react-router'

import { Home } from '../pages'
import { NavBar } from '../components'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home/>} />
      </Routes>
    </>
  )
}
export default AppRouter
