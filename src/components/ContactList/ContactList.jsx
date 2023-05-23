import { useEffect } from 'react';
import { Contacts, Btn, Item, Text } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterPhoneBook } from 'store/selectors';
import { deleteContactThunk, getContactsThunk } from 'store/phoneBook/thunk';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getFilterPhoneBook);
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {contactList.length === 0 ? (
        <Text>No contacts</Text>
      ) : (
        <ul>
          {contactList.map(name => (
            <Item key={name.id}>
              <Contacts>
                {name.name}: {name.phone}
              </Contacts>
              <Btn
                type="button"
                id={name.id}
                onClick={({ target: { id } }) => {
                  dispatch(deleteContactThunk(id));
                }}
              >
                Delete
              </Btn>
            </Item>
          ))}
        </ul>
      )}
    </>
  );
};
