import { AppDispatch } from '../../app'
import { createSlice } from '@reduxjs/toolkit'
import { swapi } from '../../../config/api.config'

const initialState = {
  data: {
    count: 0,
    next: '',
    previous: '',
    results: [],
  },
  error: '',
  isLoading: true
}

export const respDataSlice = createSlice({
  name: 'respData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state = {
        ...state,
        data: action.payload
      }
      return state
    },
    searchData: (state, action) => {
      state = {
        ...state,
        data: action.payload
      }
      return state
    },
    setLoading: (state, action) => {
      state = {
        ...state,
        isLoading: action.payload
      }
      return state
    },
    setError: (state, action) => {
      state = {
        ...state,
        error: action.payload
      }
      return state
    }

    
  },
})

export const { setData, searchData, setError, setLoading } = respDataSlice.actions

export default respDataSlice.reducer

// thunks

export const getRespData = (path: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await swapi.get(path)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const getSearchedData = (path: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await swapi.get(path)
      const data = await resp.data
      dispatch(searchData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const getSearchedDataPage = (path: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await swapi.get(path)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
