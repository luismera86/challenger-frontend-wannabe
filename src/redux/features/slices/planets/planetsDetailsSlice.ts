import { AppDispatch } from '@/redux/app'
import { Planet } from '@/models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  data: Planet
  error: string
  isLoading: boolean
}

const initialState: Props = {
  data: {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    films: [],
    url: '',
  },
  error: '',
  isLoading: true,
}

const planetDetailsSlice = createSlice({
  name: 'planetDetails',
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
    setFilms: (state, actions) => {
      state.data = {
        ...state.data,
        films: actions.payload,
      }
      return state
    },
    setResidents: (state, actions) => {
      state.data = {
        ...state.data,
        residents: actions.payload,
      }
      return state
    },
  },
})

const { setData, setError, setLoading, setFilms, setResidents } = planetDetailsSlice.actions

export default planetDetailsSlice.reducer

// thunks

export const getPlanetDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))
      dispatch(setterFilms(data))
      dispatch(setterResidents(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}


const setterFilms = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setFilms([]))

      let filmsNames: object[] = []
      data.films.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data

        filmsNames = [...filmsNames, {
          name: data.title,
          link: url
        }]
        dispatch(setFilms(filmsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}

const setterResidents = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setResidents([]))

      let residentsNames: object[] = []
      data.residents.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data

        residentsNames = [...residentsNames, {
          name: data.name,
          link: url
        }]
        dispatch(setResidents(residentsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}