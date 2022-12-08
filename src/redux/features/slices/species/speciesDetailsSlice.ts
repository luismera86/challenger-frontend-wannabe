import { AppDispatch } from '@/redux/app'
import { Specie } from '@/models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  data: Specie
  error: string
  isLoading: boolean
}

const initialState: Props = {
  data: {
    name: '',
    classification: '',
    designation: '',
    average_height: '',
    skin_colors: '',
    hair_colors: '',
    eye_colors: '',
    average_lifespan: '',
    homeworld: '',
    language: '',
    people: [],
    films: [],
    url: '',
  },
  error: '',
  isLoading: true,
}

const specieDetailsSlice = createSlice({
  name: 'specieDetails',
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

const { setData, setError, setLoading } = specieDetailsSlice.actions

export default specieDetailsSlice.reducer

// thunks

export const getSpecieDetails = (url: string) => {
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
