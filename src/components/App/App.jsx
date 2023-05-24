import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { Container, TitleH1, TitleH2 } from './App.styled';
import { ContactsSection } from 'components/ContactsSection';

export const App = () => {
  return (
    <Container>
      <TitleH1>Phonebook</TitleH1>
      <Form />
      <Filter />
      <TitleH2>Contacts</TitleH2>
      <ContactsSection />
    </Container>
  );
};
