import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm() {
  const { contactsItem } = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { name, number } = form.elements;

    if (contactsItem.some(contact => contact.name === name.value)) {
      Notiflix.Report.warning(
        'Warning',
        `${name.value} is already in contacts.`
      );
    } else {
      dispatch(addContact({ name: name.value, phone: number.value }));
      //
    }
    form.reset();
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
      />
      <Label>Number </Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
