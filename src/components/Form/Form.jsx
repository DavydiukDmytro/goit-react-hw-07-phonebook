import { ContainerForm, Label, Input, Btn } from './Form.styled';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectPhoneBook } from 'store/selectors';
import { addContactThunk } from 'store/phoneBook/thunk';
import { popupMessage, typePopupMessage } from 'utils/popupMessage';

export const Form = () => {
  const dispatch = useDispatch();
  const contactList = useSelector(selectPhoneBook);

  const formik = useFormik({
    initialValues: { name: '', phone: '' },
    onSubmit: (values, { resetForm }) => {
      addContact(values, resetForm);
    },
  });

  const addContact = (values, resetForm) => {
    const isContact = contactList.find(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    const isPhone = contactList.find(
      contact => contact.phone.toLowerCase() === values.phone.toLowerCase()
    );
    if (isContact && isPhone) {
      popupMessage('This contact already exists!', typePopupMessage.warning);
      return;
    }
    if (isContact) {
      popupMessage(
        `Contact with the name ${values.name} already exists!`,
        typePopupMessage.warning
      );
      return;
    }
    if (isPhone) {
      popupMessage(
        `Another name registered to this number!`,
        typePopupMessage.warning
      );
      return;
    } else {
      dispatch(addContactThunk(values));
      resetForm();
    }
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
            value={formik.values.phone}
            type="tel"
            name="phone"
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
