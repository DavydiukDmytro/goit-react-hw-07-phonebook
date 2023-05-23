import { Notify } from 'notiflix';

export const typePopupMessage = {
  warning: 'warning',
  success: 'success',
  info: 'info',
};

export const popupMessage = (text, type = 'success') => {
  Notify[type](text, {
    position: 'center-top',
  });
};
