import { configureStore } from '@reduxjs/toolkit';
import { nameReducer } from './reducer';

const store = configureStore({
  reducer: nameReducer
});

export default store;