import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { phoneBookInitialState } from './initialState';
import { addContactThunk, deleteContactThunk, getContactsThunk } from './thunk';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  handleFulfilledDelete,
  handleFulfilledAdd,
} from './handleReducers';

const defaultStatus = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const customArr = [getContactsThunk, addContactThunk, deleteContactThunk];

const customArrStatusActions = status => customArr.map(el => el[status]);

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: phoneBookInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...customArrStatusActions(defaultStatus.rejected)),
        handleRejected
      );
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
