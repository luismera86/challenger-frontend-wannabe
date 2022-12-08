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
  },
})

const { setData, setError, setLoading } = filmsDetailsSlice.actions

export default filmsDetailsSlice.reducer

// thunks

export const getFilmsDetails = (url: string) => {
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
