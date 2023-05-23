import { ContactList } from 'components/ContactList';
import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from 'store/phoneBook/thunk';

export const App = () => {
  const dispatch = useDispatch();

  const news = useSelector(state => state.contacts.items);

  const handleClick = () => {
    dispatch(deleteContactThunk('4'));
  };
  const handleClick2 = () => {
    console.log(news);
  };

  return (
    <Container>
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <button type="button" onClick={handleClick2}>
        Lol
      </button>
      <TitleH1>Phonebook</TitleH1>
      {/* <Form />
      <Filter /> */}
      <TitleH2>Contacts</TitleH2>
      {/* <ContactList /> */}
    </Container>
  );
};
