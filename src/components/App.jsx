import { useState } from "react";

import FormikForm from "./Form";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { MainDiv } from "./app.styled";

const template = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(template);
  const [filter, setFilter] = useState('');

  const addContact = (contact) => {
    const personNormalize = contact.name.toLowerCase().trim();
    const contactsMap = contacts.find(cont => cont.name.toLowerCase() === personNormalize);

    if (contactsMap) return alert("Це хіба можна так робити?");
    setContacts([contact,...contacts]);
  };
  const deleteContact = (id) => {
    const deleteCont = contacts.filter(cont => cont.id !== id);
    setContacts(deleteCont);
  };
  const onFilterChange = (e) => {
    const { value } = e.target;
    // console.dir(filter);

    setFilter(value);
  };
  const normalizeFilter = filter.toLowerCase().trim();
  const visiblePersons = contacts.filter(cont=>cont.name.toLowerCase().includes(normalizeFilter));

  return (
    <MainDiv>
      <h1>Phonebook</h1>
      <FormikForm hendleSubmit={addContact} />
      
      <h2>Contacts</h2>
      <Filter onFilterChange={onFilterChange} />
      <ContactList onClick={deleteContact} contacts={visiblePersons} />
    </MainDiv>
  );
};
