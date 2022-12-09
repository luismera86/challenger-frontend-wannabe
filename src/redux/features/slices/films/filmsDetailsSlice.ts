import { AppDispatch } from '@/redux/app'
import { Film } from '@/models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  data: Film
  error: string
  isLoading: boolean
}

const initialState: Props = {
  data: {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],

    url: '',
  },
  error: '',
  isLoading: true,
}

const filmsDetailsSlice = createSlice({
  name: 'filmsDetails',
  initialState,
  reducers: {
    setData: (state, action) => {
      state = {
        ...state,
        data: action.payload,
      }
      return state
    },
    setError: (state, action) => {
      state = {
        ...state,
        error: action.payload,
      }
      return state
    },
    setLoading: (state, action) => {
      state = {
        ...state,
        isLoading: action.payload,
      }
      return state
    },
    setCharacters: (state, action) => {
      state.data = {
        ...state.data,
        characters: action.payload,
      }
      return state
    },
    setPlanets: (state, action) => {
      state.data = {
        ...state.data,
        planets: action.payload,
      }
      return state
    },
    setStarShips: (state, action) => {
      state.data = {
        ...state.data,
        starships: action.payload,
      }
      return state
    },
    setVehicles: (state, action) => {
      state.data = {
        ...state.data,
        vehicles: action.payload,
      }
      return state
    },
    setSpecies: (state, action) => {
      state.data = {
        ...state.data,
        species: action.payload,
      }
      return state
    },
  },
})

const { setData, setError, setLoading, setCharacters, setPlanets, setSpecies, setStarShips, setVehicles } =
  filmsDetailsSlice.actions

export default filmsDetailsSlice.reducer

// thunks

// We make a request to the individual endpoint to receive the detailed information and execute the sub functions that extract the necessary information from other endpoints to display on the screen.
export const getFilmsDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))

      dispatch(setterCharacters(data))
      dispatch(setterPlantes(data))
      dispatch(setterStarShips(data))
      dispatch(setterVehicles(data))
      dispatch(setterSpecies(data))
     
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
   
  }
}

// It takes the information from the array of endpoints and sends requests one by one to extract the character name and the link to be reused with the useLink hook and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterCharacters = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setCharacters([]))

      let charactersNames: object[] = []
      data.characters.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        charactersNames = [...charactersNames, {
          name: data.name,
          link: url
        }]
        dispatch(setCharacters(charactersNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

// It takes the information from the array of endpoints and sends requests one by one to extract the name of the planet and the link to be reused with the hook useLink and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterPlantes = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setPlanets([]))

      let planetsNames: object[] = []
      data.planets.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        planetsNames = [...planetsNames, {
          name: data.name,
          link: url
        }]
        dispatch(setPlanets(planetsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

// It takes the information from the array of endpoints and sends requests one by one to extract the name of the starship and the link to be reused with the hook useLink and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterStarShips = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setStarShips([]))

      let starShipsNames: object[] = []
      data.starships.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        starShipsNames = [...starShipsNames, {
          name: data.name,
          link: url
        }]
        dispatch(setStarShips(starShipsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

// It takes the information from the array of endpoints and sends requests one by one to extract the name of the vehicle and the link to be reused with the hook useLink and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterVehicles = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setVehicles([]))

      let vehiclesNames: object[] = []
      data.vehicles.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        vehiclesNames = [...vehiclesNames, {
          name: data.name,
          link: url
        }]
        dispatch(setVehicles(vehiclesNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

// It takes the information from the array of endpoints and sends requests one by one to extract the species name and the link to be reused with the hook useLink and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterSpecies = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setSpecies([]))

      let speciesNames: object[] = []
      data.species.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        speciesNames = [...speciesNames, {
          name: data.name,
          link: url
        }]
        dispatch(setSpecies(speciesNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}
