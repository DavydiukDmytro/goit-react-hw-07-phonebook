import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import {
  Container,
  ErrorTitle,
  ErrorType,
  TitleH1,
  TitleH2,
} from './App.styled';
import { Modal } from 'components/Modal';
import { Loader } from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectStatusLoading } from 'store/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'store/phoneBook/thunk';
import { ContactList } from 'components/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectStatusLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);
  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <Form />
      <Filter />
      <TitleH2>Contacts</TitleH2>
      <ContactList />
      {isLoading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      {error && (
        <Modal>
          <ErrorTitle>Oops, something went wrong, try again later.</ErrorTitle>
          <ErrorType>Error: {error}</ErrorType>
        </Modal>
      )}
    </Container>
  );
};
