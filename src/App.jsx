import { Route, Routes } from "react-router-dom";
import { Home, NewContact } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newContact" element={<NewContact />} />
    </Routes>
  );
}

export default App;
