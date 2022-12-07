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
    homeworld: '',
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
    },
    setError: (state, action) => {
      state = {
        ...state,
        error: action.payload,
      }
    },
    setLoading: (state, action) => {
      state = {
        ...state,
        isLoading: action.payload,
      }
    },
  },
})

const { setData, setError, setLoading } = characterDetailsSlice.actions

export default characterDetailsSlice.reducer

// thunks

export const getCharacterData = (url: string) => { 
    return async (dispatch: AppDispatch) => { 
        dispatch(setLoading(true))
        try {
            const resp = await axios.get(url)
            const data = resp.data
            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
     }
 }