import { Contacts, Btn, Item, Text } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getPhoneBook } from 'store/selectors';
import { deleteItem } from 'store/phoneBook/phoneBookSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getPhoneBook);
  const filter = useSelector(getFilter);

  const filterList = contactList.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {filterList.length === 0 ? (
        <Text>No contacts</Text>
      ) : (
        <ul>
          {filterList.map(name => (
            <Item key={name.id}>
              <Contacts>
                {name.name}: {name.number}
              </Contacts>
              <Btn
                type="button"
                id={name.id}
                onClick={({ target: { id } }) => {
                  dispatch(deleteItem(id));
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
