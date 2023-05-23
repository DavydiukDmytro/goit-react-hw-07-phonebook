import { createSlice, nanoid } from '@reduxjs/toolkit';
import { phoneBookInitialState } from './initialState';

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: phoneBookInitialState,
  reducers: {
    addItem: {
      reducer(state, action) {
        state.list.push(action.payload);
      },
      prepare(contacts) {
        return {
          payload: {
            ...contacts,
            id: nanoid(),
          },
        };
      },
    },
    deleteItem(state, action) {
      const index = state.list.findIndex(item => item.id === action.payload);
      state.list.splice(index, 1);
    },
  },
});

export const { addItem, deleteItem } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
