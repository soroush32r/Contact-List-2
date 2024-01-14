import { Link } from "react-router-dom";
import ContactList from "../components/ContactList";

export const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-between items-center w-5/6 bg-white shadow-md p-5 rounded-md mb-10">
        <h4>Contact List</h4>
        <Link
          to={"/NewContact"}
          className="p-2 bg-sky-200 rounded hover:bg-sky-100"
        >
          Add Contact
        </Link>
      </div>
      <ContactList />
    </div>
  );
};
