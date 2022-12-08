import {
  CharacterDetails,
  Characters,
  FilmDetails,
  Films,
  Home,
  PlanetDetails,
  Planets,
  SpecieDetails,
  Species,
  StarShipDetails,
  StarShips,
  VehicleDetails,
  Vehicles,
} from '@/pages'
import { Route, Routes } from 'react-router'

import { NavBar } from '@/components'

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/films' element={<Films />} />
        <Route path='/planets' element={<Planets />} />
        <Route path='/species' element={<Species />} />
        <Route path='/vehicles' element={<Vehicles />} />
        <Route path='/starships' element={<StarShips />} />
        <Route path='/characterdetails' element={<CharacterDetails />} />
        <Route path='/filmdetails' element={<FilmDetails />} />
        <Route path='/planetdetails' element={<PlanetDetails />} />
        <Route path='/speciedetails' element={<SpecieDetails />} />
        <Route path='/vehicledetails' element={<VehicleDetails />} />
        <Route path='/starshipdetails' element={<StarShipDetails />} />
      </Routes>
    </>
  )
}
export default AppRouter
