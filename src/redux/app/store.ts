import {
  charactersDataSlice,
  charactersDetailsSlice,
  filmsDataSlice,
  filmsDetailsSlice,
  planetsDataSlice,
  planetsDetailsSlice,
  speciesDataSlice,
  speciesDetailsSlice,
  starShipsDataSlice,
  starShipsDetailsSlice,
  vehiclesDataSlice,
  vehiclesDetailsSlice,
} from '../features'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    charactersData: charactersDataSlice,
    characterDetail: charactersDetailsSlice,
    filmsData: filmsDataSlice,
    filmsDetail: filmsDetailsSlice,
    planetsData: planetsDataSlice,
    planetDetails: planetsDetailsSlice,
    speciesData: speciesDataSlice,
    speciesDetails: speciesDetailsSlice,
    starShipsData: starShipsDataSlice,
    starShipDetails: starShipsDetailsSlice,
    vehiclesData: vehiclesDataSlice,
    vehiclesDetails: vehiclesDetailsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
