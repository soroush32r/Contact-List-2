import { useLocation } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export const EditContact = () => {
  const { state } = useLocation();
  const { id, name, phone } = state;
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-5/6 bg-white rounded-md shadow-md p-4 text-center">
        <h3 className="p-2">Edit Contact</h3>
        <ContactForm id={id} contactName={name} contactPhone={phone} />
      </div>
    </div>
  );
};
