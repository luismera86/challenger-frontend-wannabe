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
  },
})

const { setData, setError, setLoading } = starShipDetailsSlice.actions

export default starShipDetailsSlice.reducer

// thunks

export const getStarShipDetails = (url: string) => {
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
