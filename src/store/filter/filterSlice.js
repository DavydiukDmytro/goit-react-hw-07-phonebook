import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilterValue: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { updateFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
