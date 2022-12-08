import { AppDispatch } from '@/redux/app'
import { People } from '@/models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  data: People
  error: string
  isLoading: boolean
}

const initialState: Props = {
  data: {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: {
      name: '',
      link: '',
    },
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: '',
  },
  error: '',
  isLoading: true,
}

const characterDetailsSlice = createSlice({
  name: 'characterDetails',
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

    setPlanet: (state, action) => {
      state.data = {
        ...state.data,
        homeworld: action.payload,
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
  },
})

const { setData, setError, setLoading, setPlanet, setFilms } = characterDetailsSlice.actions

export default characterDetailsSlice.reducer

// thunks

export const getCharacterDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))
      dispatch(setFilms([]))

      let filmsNames: object[] = []
      data.films.forEach(async (url: string) => {
        const resp2 = await axios.get(url)
        const data2 = await resp2.data

        filmsNames = [...filmsNames, {
          name: data2.title,
          link: url
        }]
        dispatch(setFilms(filmsNames))
      })

      
      const resp3 = await axios.get(data.homeworld)
      const data3 = await resp3.data

      dispatch(setPlanet({
        name: data3.name,
        link: data.homeworld
      }))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
