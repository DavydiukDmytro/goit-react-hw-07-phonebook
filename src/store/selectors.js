export const getPhoneBook = state => state.contacts.items;

export const getFilter = state => state.filters.filter;

export const getFilterPhoneBook = state => {
  if (state.contacts.items.length === 0) {
    return [];
  } else {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(state.filters.filter.toLowerCase())
    );
  }
};
