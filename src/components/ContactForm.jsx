import { useState } from "react";
import axios from "axios";
import { CONTACTS_API } from "./ContactList";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const ContactForm = () => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({ name: "", phone: "" });
  const { name, phone } = contact;

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || phone.trim() === "") {
      alert("All field are required");
      return;
    }

    try {
      await axios.post(CONTACTS_API, contact);
      setContact({ name: "", phone: "" });
    } catch (error) {
      console.log("error in posting contact: ", error);
    }

    navigate("/");
  };

  return (
    <Form
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={name}
      phone={phone}
    />
  );
};

export default ContactForm;
