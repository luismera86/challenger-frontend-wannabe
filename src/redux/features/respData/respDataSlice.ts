import { AppDispatch } from '../../app'
import { createSlice } from '@reduxjs/toolkit'
import { swapi } from '../../../config/api.config'

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}

export const respDataSlice = createSlice({
  name: 'respData',
  initialState,
  reducers: {
    setData: (state, action) => {
      return action.payload
    },
    searchData: (state, action) => {
      return action.payload
    },
  },
})

export const { setData, searchData } = respDataSlice.actions

export default respDataSlice.reducer

// thunks

export const getRespData = (path: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await swapi.get(path)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSearchedData = (path: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await swapi.get(path)
      const data = await resp.data
      dispatch(searchData(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSearchedDataPage = (path: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await swapi.get(path)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      console.log(error)
    }
  }
}


