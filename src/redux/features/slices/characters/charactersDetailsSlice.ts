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
    homeworld: {
      name: '',
      link: '',
    },
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
      return state
    },
    setError: (state, action) => {
      state = {
        ...state,
        error: action.payload,
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

    setPlanet: (state, action) => {
      state.data = {
        ...state.data,
        homeworld: action.payload,
      }
      return state
    },

    setFilms: (state, actions) => {
      state.data = {
        ...state.data,
        films: actions.payload,
      }
      return state
    },
  },
})

const { setData, setError, setLoading, setPlanet, setFilms } = characterDetailsSlice.actions

export default characterDetailsSlice.reducer

// thunks

// We make a request to the individual endpoint to receive the detailed information and execute the sub functions that extract the necessary information from other endpoints to display on the screen.
export const getCharacterDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))
      dispatch(setterFilms(data))
      dispatch(setterPlanet(data))
    } catch (error) {
      dispatch(setError(error))
    } finally {
      dispatch(setLoading(false))
    }
  }
}

// It takes the information from the array of endpoints and sends requests one by one to extract the movie title and the link to be reused with the useLink hook and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterFilms = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setFilms([]))

      let filmsNames: object[] = []
      data.films.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data

        filmsNames = [
          ...filmsNames,
          {
            name: data.title,
            link: url,
          },
        ]
        dispatch(setFilms(filmsNames))
      })
    } catch (error) {
      console.log(error)
    }
  }
}

// It takes the link information to the endpoint and sends the request to extract the planet name and the link to be reused with the useLink hook and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterPlanet = (data: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setPlanet([]))

      const resp = await axios.get(data.homeworld)
      const datar = await resp.data

      dispatch(
        setPlanet({
          name: datar.name,
          link: datar.homeworld,
        })
      )
    } catch (error) {
      console.log(error)
    }
  }
}
