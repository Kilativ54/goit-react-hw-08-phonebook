import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';

import { BtnDelete } from './contactList.styled';

export function ContactList() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const { contactsItem } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterContact = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contactsItem.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilterContact();
  return (
    <div>
      <ul>
        {visibleContacts.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
            <BtnDelete
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </BtnDelete>
          </li>
        ))}
      </ul>
    </div>
  );
}
