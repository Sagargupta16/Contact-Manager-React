import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact.js";
import EditContact from "./EditContact.js";
import ContactList from "./ContactList.js";
import DarkMode from "./darkmode.js";
import ContactDetail from "./ContactDetail";
import { predata } from "./predata.js";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || predata,
  );

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  contacts.sort((a, b) => a.name.localeCompare(b.name));
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addContactHandler = async (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const updateContactHandler = async (contact) => {
    setContacts(
      contacts.map((c) => (c.id === contact.id ? { ...c, ...contact } : c)),
    );
  };

  const removeContactHandler = async (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

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
      <Router basename="/Contact-Manager-React">
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
