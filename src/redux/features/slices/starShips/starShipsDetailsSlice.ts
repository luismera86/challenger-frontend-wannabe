import { AppDispatch } from '@/redux/app'
import { Starship } from '@/models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  data: Starship
  error: string
  isLoading: boolean
}

const initialState: Props = {
  data: {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    url: '',
  },
  error: '',
  isLoading: true,
}

const starShipDetailsSlice = createSlice({
  name: 'starShipDetails',
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
    setPilots: (state, actions) => {
      state.data = {
        ...state.data,
        pilots: actions.payload,
      }
      return state
    },
  },
})

const { setData, setError, setLoading, setFilms, setPilots } = starShipDetailsSlice.actions

export default starShipDetailsSlice.reducer

// thunks

export const getStarShipDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))
      dispatch(setterFilms(data))
      dispatch(setterPilots(data))

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

const setterPilots = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setPilots([]))

      let pilotsNames: object[] = []
      data.pilots.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data

        pilotsNames = [...pilotsNames, {
          name: data.name,
          link: url
        }]
        dispatch(setPilots(pilotsNames))
      })
    } catch (error) {
      console.log(error)
    } 
  }
}