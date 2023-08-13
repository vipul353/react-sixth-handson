import "./App.css";
import { Routes, Route, } from "react-router-dom";
import Home from "./Components/Home/Home";
import Students from "./Components/Students/Students";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Navigation/NavBar";
import { StudentForm } from "./Components/Form/StudentForm";
import Data from "./data/Data";
import { createContext } from "react";
// import { useContext } from "react";
import { useState } from "react";
import AddStudent from "./Components/Form/AddStudent";

export const contextApi = createContext() 

function App() {
 const [StuData,setStuData] = useState(Data)

  return (
    <div className="App">
     <contextApi.Provider value={{StuData,setStuData}}>
     <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AddForm" element={<AddStudent />} />
        <Route path="/Form/:id" element={<StudentForm />} />
      </Routes>
     </contextApi.Provider>
    </div>
  );
}

export default App;
