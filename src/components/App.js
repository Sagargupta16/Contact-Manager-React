import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
// import api from '../api/contacts';
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact.js";
import EditContact from "./EditContact.js";
import ContactList from "./ContactList.js";
import DarkMode from "./darkmode.js";
import ContactDetail from "./ContactDetail";
import { predata } from "./predata.js";

function App() {
  //  comment when api is ready Start
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || predata,
  );
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  //   comment when api is ready End

  //  uncomment when api is ready Start

  // const [contacts, setContacts] = useState([]);

  //  uncomment when api is ready End

  contacts.sort((a, b) => a.name.localeCompare(b.name));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  //Retrieve Contacts from API

  //  uncomment when api is ready Start

  // const retrieveContacts = async () => {
  //   const response = await api.get('/');
  //   return response.data;
  // }

  //  uncomment when api is ready End

  const addContactHandler = async (contact) => {
    //  uncomment when api is ready Start

    // const request ={
    //   id: uuid(),
    //   ...contact
    // }
    // const response = await api.post('/',request);
    // setContacts([...contacts, response.data]);

    // uncomment when api is ready End

    //  comment when api is ready Start
    setContacts([...contacts, { id: uuid(), ...contact }]);
    //  comment when api is ready End
  };

  const updateContactHandler = async (contact) => {
    //  uncomment when api is ready Start

    // const response = await api.put(`/${contact.id}`,contact);
    // setContacts(contacts.map(c => c.id === contact.id ? response.data : c));

    // uncomment when api is ready End

    // comment when api is not ready Start
    setContacts(
      contacts.map((c) => (c.id === contact.id ? { ...c, ...contact } : c)),
    );
    // comment when api is not ready End
  };

  const removeContactHandler = async (id) => {
    //  uncomment when api is ready Start

    // await api.delete(`/${id}`);

    //  uncomment when api is ready End
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // uncomment when api is ready Start

  // useEffect(() => {
  //   const getAllContacts = async () => {
  //     const allContacts = await retrieveContacts();
  //     if(allContacts.length > 0) {
  //       setContacts(allContacts);
  //     }
  //   }
  //   getAllContacts();
  // }, []);

  // uncomment when api is ready End

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.length > 0) {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact.name + " " + contact.email)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  return (
    <div className="App-container">
      <Router basename="/contact-manager">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList
                {...contacts}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactID={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditContact
                contacts={contacts}
                updateContactHandler={updateContactHandler}
              />
            }
          />
          <Route
            path="/contact/:id"
            element={<ContactDetail contacts={contacts} />}
          />
        </Routes>
        <DarkMode />
      </Router>
    </div>
  );
}

export default App;
