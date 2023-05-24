import { createSelector } from '@reduxjs/toolkit';

export const selectPhoneBook = state => state.contacts.items;

export const selectFilter = state => state.filters.filter;

export const selectFilterPhoneBook = createSelector(
  [selectPhoneBook, selectFilter],
  (contactList, filter) => {
    if (contactList.length === 0) {
      return [];
    }
    if (isNaN(filter[0])) {
      return contactList.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contactList.filter(item => item.phone.includes(filter));
    }
  }
);

export const selectStatusLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
