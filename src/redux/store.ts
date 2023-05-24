import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer'


const isDevelopment = import.meta.env.MODE === 'development';

const store = configureStore({
  reducer: appReducer,
  devTools:isDevelopment,
});

export type RootState = ReturnType<typeof store.getState>
export type Dispatch = typeof store.dispatch

export default store;
