import { RespData, Starship, Urls } from '@/models'

import { AppDispatch } from '@/redux/app'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const { Url_Starships } = Urls

interface Props {
  dataStarships: RespData<Starship>
  isLoading: boolean
  error: string
}

const initialState: Props = {
  dataStarships: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  error: '',
  isLoading: true,
}

const starshipsDataSlice = createSlice({
  name: 'starshipsData',
  initialState,
  reducers: {
    setData: (state, action) => {
      state = {
        ...state,
        dataStarships: action.payload,
      }
      return state
    },
    setSearchData: (state, action) => {
      state = {
        ...state,
        dataStarships: action.payload,
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

const { setSearchData, setError, setData, setLoading } = starshipsDataSlice.actions

export default starshipsDataSlice.reducer

// thunks

// The api information is received paginated, we make one request at a time by page number.
export const getRespData = (page: number) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(`${Url_Starships}/?page=${page}`)
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
      const resp = await axios.get(`${Url_Starships}/?search=${searchResults}`)
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
      const resp = await axios.get(`${Url_Starships}/?search=l&page=${page}`)
      const data = await resp.data

      dispatch(setData(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}
