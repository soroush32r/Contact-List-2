const Contact = ({ name, phone }) => {
  return (
    <div className="flex flex-col justify-center bg-white rounded-md my-2 p-3 shadow-md">
      <div className="flex items-center">
        <p className="font-semibold">Name: </p>
        <p className="font-bold text-lg ml-2">{name}</p>
      </div>
      <div className="flex items-center">
        <p className="font-semibold">Number: </p>
        <p className="font-bold text-lg ml-2">{phone}</p>
      </div>
    </div>
  );
};

export default Contact;
