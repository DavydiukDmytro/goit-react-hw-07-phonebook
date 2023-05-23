import { combineReducers } from '@reduxjs/toolkit';
import { filterReducer } from './filter/filterSlice';
import { phoneBookReducer } from './phoneBook/phoneBookSlice';

export const reducer = combineReducers({
  phoneBook: phoneBookReducer,
  filter: filterReducer,
});
