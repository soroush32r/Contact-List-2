import { useNavigate } from "react-router-dom";

const Contact = ({ id, name, phone, handleDeleteContact }) => {
  const navigate = useNavigate();
  const handleDeleteOnClick = () => {
    handleDeleteContact(id, name);
  };
  const handleEditOnClick = () => {
    navigate("/editContact", { state: { id, name, phone } });
  };
  return (
    <div className="flex justify-between items-center bg-white rounded-md my-2 p-3 shadow-md">
      <div className="flex flex-col">
        <div className="flex items-center">
          <p className="font-semibold">Name: </p>
          <p className="font-bold text-lg ml-2">{name}</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold">Number: </p>
          <p className="font-bold text-lg ml-2">{phone}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center">
        <button
          className="text-gray-600 hover:text-gray-500 md:mr-5"
          onClick={handleEditOnClick}
        >
          Edit
        </button>
        <button
          className="text-red-600 hover:text-red-500"
          onClick={handleDeleteOnClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
