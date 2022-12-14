import { AppDispatch } from '@/redux/app'
import { Specie } from '@/models'
import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

interface Props {
  data: Specie
  error: string
  isLoading: boolean
}

const initialState: Props = {
  data: {
    name: '',
    classification: '',
    designation: '',
    average_height: '',
    skin_colors: '',
    hair_colors: '',
    eye_colors: '',
    average_lifespan: '',
    homeworld: {
      link: '',
      name: '',
    },
    language: '',
    people: [],
    films: [],
    url: '',
  },
  error: '',
  isLoading: true,
}

const specieDetailsSlice = createSlice({
  name: 'specieDetails',
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
    setPeople: (state, actions) => {
      state.data = {
        ...state.data,
        people: actions.payload,
      }
      return state
    },
  },
})

const { setData, setError, setLoading, setFilms, setPeople, setPlanet } = specieDetailsSlice.actions

export default specieDetailsSlice.reducer

// thunks

// We make a request to the individual endpoint to receive the detailed information and execute the sub functions that extract the necessary information from other endpoints to display on the screen.
export const getSpecieDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await axios.get(url)
      const data = resp.data
      dispatch(setData(data))
      dispatch(setterFilms(data))
      dispatch(setterPlanet(data))
      dispatch(setterPeople(data))
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

// It takes the information from the array of endpoints and sends requests one by one to extract the character name and the link to be reused with the useLink hook and redirect to the detail, and insert it in the state to be displayed in the detail screen.
const setterPeople = (data: any) => {
  return (dispatch: AppDispatch) => {
    dispatch(setLoading(true))
    try {
      dispatch(setPeople([]))

      let peopleNames: object[] = []
      data.people.forEach(async (url: string) => {
        const resp = await axios.get(url)
        const data = await resp.data

        peopleNames = [
          ...peopleNames,
          {
            name: data.name,
            link: url,
          },
        ]
        dispatch(setPeople(peopleNames))
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
      if (data.homeworld === null) {
        return
      }
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
