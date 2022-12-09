import { getCharacterDetails } from '@/redux/features/slices/characters/charactersDetailsSlice'
import { getFilmsDetails } from '@/redux/features/slices/films/filmsDetailsSlice'
import { getPlanetDetails } from '@/redux/features/slices/planets/planetsDetailsSlice'
import { getSpecieDetails } from '@/redux/features/slices/species/speciesDetailsSlice'
import { getStarShipDetails } from '@/redux/features/slices/starShips/starShipsDetailsSlice'
import { getVehicleDetails } from '@/redux/features/slices/vehicles/vehiclesDetailsSlice'
import { useAppDispatch } from '@/redux'
import { useNavigate } from 'react-router-dom'

export const useLink = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onHandledRedirectPlanet = (url: string) => {
    dispatch(getPlanetDetails(url))
    navigate('/planetdetails')
  }

  const onHandleRedirectCharacter = (url: string) => {
    dispatch(getCharacterDetails(url))
    navigate('/characterdetails')
  }
  const onHandleRedirectStarShip = (url: string) => {
    dispatch(getStarShipDetails(url))
    navigate('/starshipdetails')
  }

  const onHandleRedirectVehicle = (url: string) => {
    dispatch(getVehicleDetails(url))
    navigate('/vehicledetails')
  }

  const onHandleRedirectSpecie = (url: string) => {
    dispatch(getSpecieDetails(url))
    navigate('/speciedetails')
  }

  const onHandleRedirectFilm = (url: string) => {
    dispatch(getFilmsDetails(url))
    navigate('/filmdetails')
  }

  return {
    onHandleRedirectCharacter,
    onHandleRedirectSpecie,
    onHandleRedirectStarShip,
    onHandleRedirectVehicle,
    onHandleRedirectFilm,
    onHandledRedirectPlanet,
  }
}
