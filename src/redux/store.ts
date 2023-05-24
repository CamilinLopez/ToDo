import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer'


const isDevelopment = import.meta.env.MODE === 'development';

const store = configureStore({
  reducer: appReducer,
  devTools:isDevelopment,
});

export default store;
