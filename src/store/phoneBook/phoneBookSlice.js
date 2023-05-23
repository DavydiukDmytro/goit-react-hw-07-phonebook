import { createSlice } from '@reduxjs/toolkit';
import { phoneBookInitialState } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: phoneBookInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilled)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
