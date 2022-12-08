import { RespData, Specie, Urls } from '@/models'

import { AppDispatch } from '@/redux/app'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const { Url_Species } = Urls

interface Props {
  dataSpecies: RespData<Specie>
  isLoading: boolean
  error: string
}

const initialState: Props = {
  dataSpecies: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  error: '',
  isLoading: true,
}

const speciesDataSlice = createSlice({
  name: 'speciesData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state = {
        ...state,
        dataSpecies: action.payload,
      }
      return state
    },
    setSearchData: (state, action) => {
      state = {
        ...state,
        dataSpecies: action.payload,
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

const { setSearchData, setError, setData, setLoading } = speciesDataSlice.actions

export default speciesDataSlice.reducer

// thunks

export const getRespData = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_Species}/?page=${page}`)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const getSearchedData = (searchResults: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_Species}/?search=${searchResults}`)
      const data = await resp.data
      dispatch(setSearchData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

export const getSearchedDataPage = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_Species}/?search=l&page=${page}`)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
