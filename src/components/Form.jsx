const Form = ({ handleSubmit, handleChange, name, phone }) => {
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        value={name}
        name="name"
        onChange={handleChange}
        className="border p-2 rounded-md my-2"
        placeholder="Enter Name: John Smith"
      />
      <input
        value={phone}
        name="phone"
        onChange={handleChange}
        type="tel"
        className="border p-2 rounded-md my-2"
        placeholder="Enter Phone Number: +120001234567"
      />
      <button
        type="submit"
        className="p-2 w-full text-center bg-sky-100 rounded-md hover:bg-sky-200"
      >
        Add Contact
      </button>

      {/* <Link
        to={"/"}
        onClick={handleSubmit}
        className="p-2 w-full text-center bg-sky-100 rounded-md"
      >
        {" "}
        Add Contact{" "}
      </Link> */}
    </form>
  );
};

export default Form;
