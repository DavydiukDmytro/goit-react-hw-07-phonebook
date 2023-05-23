import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { phoneBookReducer } from './phoneBook/phoneBookSlice';

export const store = configureStore({
  reducer: {
    filters: filterReducer,
    contacts: phoneBookReducer,
  },
});
