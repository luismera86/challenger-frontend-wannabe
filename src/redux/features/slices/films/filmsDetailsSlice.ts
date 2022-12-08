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
     
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
   
  }
}

const setterCharacters = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setCharacters([]))

      let charactersNames: string[] = []
      data.characters.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        charactersNames = [...charactersNames, data.name]
        dispatch(setCharacters(charactersNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

const setterPlantes = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setPlanets([]))

      let planetsNames: string[] = []
      data.planets.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        planetsNames = [...planetsNames, data.name]
        dispatch(setPlanets(planetsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

const setterStarShips = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setStarShips([]))

      let starShipsNames: string[] = []
      data.starships.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data
        starShipsNames = [...starShipsNames, data.name]
        dispatch(setStarShips(starShipsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}
