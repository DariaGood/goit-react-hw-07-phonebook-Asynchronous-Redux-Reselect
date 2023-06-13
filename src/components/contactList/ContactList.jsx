import { Contacts } from 'components/Style/Element.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contatcsApi';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const searchFilter = useSelector(state => state.filter);
 // const serchFilterToLowerCase = searchFilter.toLowerCase();

  const getVisibleContacts = () => {
    if (searchFilter !== '') {
      return data.filter(({ userName }) =>
      userName.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }
    return data;
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Contacts>
      {visibleContacts &&
        visibleContacts.map(contact => {
          return <ContactListItem key={contact.id} {...contact} />;
        })}
    </Contacts>
  );
};
