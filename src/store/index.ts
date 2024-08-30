import { configureStore } from '@reduxjs/toolkit'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemons';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Uso tipado de useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// Uso tipado de useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;