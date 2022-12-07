import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { People, RespData } from '../../../models'

import { AppDispatch } from '../../app'
import { swapi } from '../../../config/api.config'

const initialState: RespData<People> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}

export const peoplesSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<RespData<People>>) => {
      return action.payload
    },
    searchPeople: (state, action: PayloadAction<RespData<People>>) => {
      return action.payload
    },
  },
})

export const { setPeople, searchPeople } = peoplesSlice.actions

export default peoplesSlice.reducer

// thunks

export const getPeoples = (page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await swapi.get(`/people/?page=${page}`)
      const data = await resp.data

      dispatch(setPeople(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSearchedPeople = (value: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await swapi.get(`/people/?search=${value}`)
      const data = await resp.data
      dispatch(searchPeople(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSearchedPeoplePage = (page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await swapi.get(`/people/?search=l&page=${page}`)
      const data = await resp.data

      dispatch(setPeople(data))
    } catch (error) {
      console.log(error)
    }
  }
}


