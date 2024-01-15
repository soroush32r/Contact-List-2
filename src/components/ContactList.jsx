import { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Contact";

export const CONTACTS_API = "http://127.0.0.1:3000/contacts";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Get data with Fetch
  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/contacts")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw response;
  //     })
  //     .then((data) => {
  //       setContacts(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error happend in fetching data: ", error);
  //     });
  // }, []);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await axios.get(CONTACTS_API);
        setContacts(data);
      } catch (error) {
        console.error("Error happend in fetching data: ", error);
      }
    };

    getContacts();
  }, [contacts]);

  const handleDeleteContact = async (id, name) => {
    try {
      await axios.delete(`${CONTACTS_API}/${id}`).then((response) => {
        alert(`User ${name} deleted successfully`, response.data);
        const newContactList = contacts.filter((contact) => contact.id !== id);
        setContacts(newContactList);
      });
    } catch (error) {
      console.error(`error happend on delete user ${name}: `, error);
    }
  };

  return (
    <div className="w-5/6 h-96 overflow-y-auto">
      {contacts.map(({ id, name, phone }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          phone={phone}
          handleDeleteContact={handleDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
