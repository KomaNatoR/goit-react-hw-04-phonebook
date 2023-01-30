import { useState } from "react";

import FormikForm from "./Form";
import Filter from "./Filter";
import ContactList from "./ContactList";

const template = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(template);
  // const [filter, setFilter] = useState('');

  const hendleSubmit = (contact) => {
    setContacts([contact,...contacts]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <FormikForm hendleSubmit={hendleSubmit} />
      
      <h2>Contacts</h2>
      <Filter/>
      <ContactList contacts={contacts} />
    </div>
  );
};
