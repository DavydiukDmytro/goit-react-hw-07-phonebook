import { ContainerForm, Label, Input, Btn } from './Form.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix';
import { addItem } from 'store/phoneBook/phoneBookSlice';
import { getPhoneBook } from 'store/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(getPhoneBook);

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: (values, { resetForm }) => {
      addContact(values);
      resetForm();
    },
  });

  const addContact = values => {
    const isContact = contactList.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    if (isContact) {
      Notify.warning(`${isContact.name} is contacts.`, {
        position: 'center-top',
      });
    } else dispatch(addItem(values));
  };

  return (
    <>
      <ContainerForm onSubmit={formik.handleSubmit}>
        <Label>
          Name
          <Input
            value={formik.values.name}
            type="text"
            name="name"
            onChange={formik.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            value={formik.values.number}
            type="tel"
            name="number"
            onChange={formik.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Btn type="submit">Add contact</Btn>
      </ContainerForm>
    </>
  );
};
