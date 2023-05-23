import { Contacts, Btn, Item, Text } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterPhoneBook, getStatusLoading } from 'store/selectors';
import { deleteContactThunk } from 'store/phoneBook/thunk';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getFilterPhoneBook);
  const isLoading = useSelector(getStatusLoading);

  return (
    <>
      {contactList.length === 0 ? (
        !isLoading && <Text>No contacts</Text>
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
                  if (!isLoading) {
                    dispatch(deleteContactThunk(id));
                  }
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
