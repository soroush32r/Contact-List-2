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
  }, []);

  return (
    <div className="w-5/6 h-96 overflow-y-scroll">
      {contacts.map(({ id, name, phone }) => (
        <Contact key={id} name={name} phone={phone} />
      ))}
    </div>
  );
};

export default ContactList;
