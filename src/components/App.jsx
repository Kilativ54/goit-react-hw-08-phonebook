import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/contactList';

import { Container } from './App.styled';
import { ContactForm } from './contactForm/ContactForm';

export function App() {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <h2> Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
