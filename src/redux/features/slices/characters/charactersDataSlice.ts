import { People, RespData, Urls } from '@/models'

import { AppDispatch } from '@/redux/app'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const { Url_People } = Urls

interface Props {
  dataCharacters: RespData<People>
  isLoading: boolean
  error: string
}

const initialState: Props = {
  dataCharacters: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  error: '',
  isLoading: true,
}

const charactersDataSlice = createSlice({
  name: 'charactersData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state = {
        ...state,
        dataCharacters: action.payload,
      }
      return state
    },
    setSearchData: (state, action) => {
      state = {
        ...state,
        dataCharacters: action.payload,
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

const { setSearchData, setError, setData, setLoading } = charactersDataSlice.actions

export default charactersDataSlice.reducer

// thunks

// The api information is received paginated, we make one request at a time by page number.
export const getRespData = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_People}/?page=${page}`)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

// We do a search request for the values sent from the search bar
export const getSearchedData = (searchResults: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_People}/?search=${searchResults}`)
      const data = await resp.data
      dispatch(setSearchData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

// In case the search result arrives paginated, we perform a request by result page number.
export const getSearchedDataPage = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_People}/?search=l&page=${page}`)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
