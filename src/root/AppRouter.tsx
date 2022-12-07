import { DataDetailsContainer, NavBar } from '../components'
import { Home, Peoples } from '../pages'
import { Route, Routes } from 'react-router'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/people' element={<Peoples />} />
        <Route path='/dataDetails' element={<DataDetailsContainer />} />
        
      </Routes>
    </>
  )
}
export default AppRouter
