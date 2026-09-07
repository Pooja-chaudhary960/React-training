import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import { useEffect } from "react";
import MainLayout from "./components/MainLayout";
import { Routes, Route } from "react-router-dom";
import Student from "./pages/Student.jsx";
import User from "./pages/Users.jsx";
import Home from "./pages/Home.jsx";
import StudentForm from "./components/StudentForm.jsx";

const App = () => {
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getUser");

      console.log(response.data.users);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Routes>
      <Route element={<MainLayout />}> 
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/form" element={<Form />} />
        <Route path="/student" element={<Student />} />
        <Route path="/addStudent" element={<StudentForm />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
