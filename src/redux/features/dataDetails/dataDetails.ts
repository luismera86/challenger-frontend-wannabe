import { AppDispatch } from '../../app'
import { People } from '../../../models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  dataCharacter: People
  error: string
  isLoading: true
}

const initialState = {
  dataCharacter: {},
  error: '',
  isLoading: true,
}

const dataDetailsSlice = createSlice({
  name: 'dataDetails',
  initialState,
  reducers: {
    setDataCharacter: (state, action) => {
      state = {
        ...state,
        dataCharacter: action.payload,
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
    setError: (state, action) => {
      state = {
        ...state,
        error: action.payload,
      }
      return state
    },
  },
})

export const { setDataCharacter, setError, setLoading } = dataDetailsSlice.actions

export default dataDetailsSlice.reducer

// Thunks

export const getDataDetailsCharacter = (path: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(path)
      const data = resp.data
      dispatch(setDataCharacter(data))
    } catch (error: any) {
      dispatch(setError(error.message))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
