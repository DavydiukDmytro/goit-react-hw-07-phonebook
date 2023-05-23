import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getStatusLoading } from 'store/selectors';
import { getContactsThunk } from 'store/phoneBook/thunk';
import { Loader } from 'components/Loader';
import { ContactList } from 'components/ContactList';
import { ErrorTitle, ErrorType } from './ContactsSection.styled';

export const ContactsSection = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getStatusLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <>
          <ErrorTitle>Oops, something went wrong, try again later.</ErrorTitle>
          <ErrorType>Error: {error}</ErrorType>
        </>
      ) : (
        <ContactList />
      )}
      {isLoading && <Loader />}
    </>
  );
};
