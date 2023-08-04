import "./App.css";
import { Routes, Route, } from "react-router-dom";
import Home from "./Components/Home/Home";
import Students from "./Components/Students/Students";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Navigation/NavBar";
import { StudentForm } from "./Components/Form/StudentForm";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Form/:id" element={<StudentForm />} />
      </Routes>
    </div>
  );
}

export default App;
