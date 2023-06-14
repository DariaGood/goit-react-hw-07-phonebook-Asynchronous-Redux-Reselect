import { useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contatcsApi';
import { nanoid } from 'nanoid';
import ContactForm from 'components/contactForm/ContactForm';
import { ButtonSubmit } from 'components/contactForm/ButtonSubmit';
import { Input } from 'components/Style/Element.styled';

export const Phonebook = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const [userName, setUserName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setUserName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const reset = () => {
    setUserName('');
    setNumber('');
  };

  const clickOnBtnAdd = async e => {
    e.preventDefault();

    try {
      data.find(contact => contact.userName === userName)
        ? toast.error(`${userName} is already in contacts.`)
        : await addContact({ userName, number });
    } catch (error) {
      console.log(error);
    }

    reset();
  };

  
    return (
        <>
          <ContactForm onSubmit={clickOnBtnAdd}>
            <label htmlFor={nameInputId}>
              <p>Name</p>
              <Input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                onChange={handleChange}
                value={userName}
              />
            </label>
            <label htmlFor={numberInputId}>
              <p>Number</p>
              <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="123-45-67"
                onChange={handleChange}
                value={number}
              />
            </label>
            <ButtonSubmit text="Add contact" />
          </ContactForm>
        </>
  );
};