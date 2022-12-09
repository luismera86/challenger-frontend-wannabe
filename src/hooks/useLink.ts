import { getCharacterDetails } from '@/redux/features/slices/characters/charactersDetailsSlice'
import { getFilmsDetails } from '@/redux/features/slices/films/filmsDetailsSlice'
import { getPlanetDetails } from '@/redux/features/slices/planets/planetsDetailsSlice'
import { getSpecieDetails } from '@/redux/features/slices/species/speciesDetailsSlice'
import { getStarshipDetails } from '@/redux/features/slices/starships/starshipsDetailsSlice'
import { getVehicleDetails } from '@/redux/features/slices/vehicles/vehiclesDetailsSlice'
import { useAppDispatch } from '@/redux'
import { useNavigate } from 'react-router-dom'

export const useLink = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  // Performs a set of the details obtained from the api in the state and redirects to the path where the details will be displayed. 
  const onHandledRedirectPlanet = (url: string) => {
    dispatch(getPlanetDetails(url))
    navigate('/planetdetails')
  }

  const onHandleRedirectCharacter = (url: string) => {
    dispatch(getCharacterDetails(url))
    navigate('/characterdetails')
  }
  const onHandleRedirectStarship = (url: string) => {
    dispatch(getStarshipDetails(url))
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
    onHandleRedirectStarship,
    onHandleRedirectVehicle,
    onHandleRedirectFilm,
    onHandledRedirectPlanet,
  }
}
