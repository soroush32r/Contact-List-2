import ContactForm from "../components/ContactForm";

export const NewContact = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-5/6 bg-white rounded-md shadow-md p-4 text-center">
        <h3 className="p-2">New Contact</h3>
        <ContactForm />
      </div>
    </div>
  );
};
