import { Route, Routes } from "react-router-dom";
import { Home, NewContact, EditContact } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newContact" element={<NewContact />} />
      <Route path="/editContact" element={<EditContact />} />
    </Routes>
  );
}

export default App;
