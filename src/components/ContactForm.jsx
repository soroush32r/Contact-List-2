import { useState } from "react";
import axios from "axios";
import { CONTACTS_API } from "./ContactList";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const ContactForm = ({ id = "", contactName = "", contactPhone = "" }) => {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: contactName,
    phone: contactPhone,
  });
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

    if (id === "") {
      try {
        await axios.post(CONTACTS_API, contact);
      } catch (error) {
        console.log("error in posting contact: ", error);
      }
    } else {
      try {
        setContact({ id, ...contact });
        await axios.put(`${CONTACTS_API}/${id}`, contact);
      } catch (error) {
        console.log("error in updating contact: ", error);
      }
    }

    // setContact({ name: "", phone: "" });
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
