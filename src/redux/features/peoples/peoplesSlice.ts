import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from '../../app'
import { People } from '../../../models'
import { swapi } from '../../../config/api.config';

const initialState: People[] = []

export const peoplesSlice = createSlice({
  name: 'peoples',
  initialState,
  reducers: {
    setPeople: (state, action: PayloadAction<People[]>) => {
      return action.payload
    },
  },
})

export const { setPeople } = peoplesSlice.actions

export default peoplesSlice.reducer

// thunks

export const getPeoples = () => {
    return async (dispatch: AppDispatch) => {
      try {
          const resp = await swapi.get('/people')
          const data = await resp.data
          
          dispatch(setPeople(data.results))
      } catch (error) {
        console.log(error)
      }
    }
    
}

