import React, { useContext } from 'react';
import EditForm from './EditForm';
import { useParams } from 'react-router-dom';
import { ContactsContext } from './Edit';

const EditContact = ({ history }) => {
  const { contacts, setContacts } = useContext(ContactsContext);
  const { id } = useParams();
  const contactToEdit = contacts.find((contact) => contact.id === id);

  const handleOnSubmit = (contact) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts([contact, ...filteredContacts]);
    history.push('/');
  };

  return (
    <div>
      <EditForm contact={contactToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditContact;