import { createSlice } from '@reduxjs/toolkit';
import { phoneBookInitialState } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';
import { popupMessage, typePopupMessage } from 'utils/popupMessage';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === payload.id);
  state.items.splice(index, 1);
  popupMessage('Сontact deleted!', typePopupMessage.info);
};

const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
  popupMessage('Сontact saved!');
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
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
