import { configureStore } from '@reduxjs/toolkit'
import dataDetails from '../features/dataDetails/dataDetails'
import peoplesReducer from '../features/peoples/peoplesSlice'
import respData from '../features/respData/respDataSlice'

export const store = configureStore({
  reducer: {
    peoples: peoplesReducer,
    data: respData,
    dataDetails: dataDetails,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
