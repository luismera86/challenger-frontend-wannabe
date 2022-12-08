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
  },
})

const { setData, setError, setLoading } = planetDetailsSlice.actions

export default planetDetailsSlice.reducer

// thunks

export const getPlanetDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
