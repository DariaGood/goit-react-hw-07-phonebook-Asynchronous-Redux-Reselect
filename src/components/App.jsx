import { Container } from './container/Container';
import { H1, H2 } from './titles/Title';
import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { Toaster } from 'react-hot-toast';

export const App = () => {

  return (
    <Container as="main" px={5}>
      <H1 title="Phonebook" />
      <ContactForm />
      <H2 title="Contacts" />
      <Filter title="Find contact" />
      <ContactList />
      <Toaster />
    </Container>
  );
};
