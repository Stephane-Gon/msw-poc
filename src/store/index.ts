import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Api } from './indexApi';
import { UsersSlice } from './users/slice';

export const rootReducer = combineReducers({
  [Api.reducerPath]: Api.reducer,
  Users: UsersSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(Api.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
