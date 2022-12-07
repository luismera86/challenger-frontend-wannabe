import { AppDispatch } from '../../app'
import { People } from '../../../models'
import { createSlice } from '@reduxjs/toolkit'

const initialState: People = {
  birth_year: '',
  eye_color: '',
  films: [],
  gender: '',
  hair_color: '',
  height: '',
  homeworld: '',
  mass: '',
  name: '',
  skin_color: '',
  species: [],
  starships: [],
  url: '',
  vehicles: [],
}

const peopleDetailSlice = createSlice({
  name: 'peopleDetail',
  initialState,
  reducers: {
    setPeople: (state, action) => {
      return action.payload
    },
  },
})

export const { setPeople } = peopleDetailSlice.actions

export default peopleDetailSlice.reducer

// Thunks

export const getDetailPeople = () => {
 async (dispatch: AppDispatch) => {
    try {
        
    } catch (error) {
        console.log(error)
    }
 }
}

