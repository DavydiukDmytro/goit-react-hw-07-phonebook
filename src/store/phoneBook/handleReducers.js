import { popupMessage, typePopupMessage } from 'utils/popupMessage';

export const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = null;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const handleFulfilledDelete = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(task => task.id === payload.id);
  state.items.splice(index, 1);
  popupMessage('Сontact deleted!', typePopupMessage.info);
};

export const handleFulfilledAdd = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
  popupMessage('Сontact saved!');
};
