import Wrapper from '.components/Wrapper/Wrapper';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader';
import { PrimaryTitle, SecondaryTitle } from 'components/Wrapper/Wrapper.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    
  return (
    <Wrapper>
      <PrimaryTitle>Phonebook</PrimaryTitle>
      <ContactForm />
      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactsList />
    </Wrapper>
  );
};

export default ContactsPage;