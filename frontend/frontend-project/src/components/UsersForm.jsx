import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UsersForm = () => {
  const [users, setUsers] = useState(null);
  const { id } = useParams();
  const isEditMode = Boolean(id);
  console.log(id);

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password:"",
  };

  useEffect(() => {
    if (id) {
      fetchUserById(id);
    }
  }, [id]);

  const fetchUserById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/getUser/${id}`,
      );
      console.log(response);

      const userData = response.data.user;
      setUsers(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (values) => {
    console.log(values);

    try {
      if (id) {
        await axios.put(`http://localhost:3000/api/updateUser/${id}`, values);
      } else {
        await axios.post("http://localhost:3000/api/create", values);
      }
      navigate("/user");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add user");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md">

  <h1 className="text-2xl font-bold mb-6 text-center text-gray-700">
    {isEditMode ? "Edit User" : "Add User"}
  </h1>

  <Formik
    initialValues={users || initialValues}
    enableReinitialize={true}
    onSubmit={handleSubmit}
  >
    <Form className="space-y-5">

      <Field
        type="text"
        name="name"
        placeholder="Enter Name"
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"
      />

      <Field
        type="email"
        name="email"
        placeholder="Enter Email"
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"
      />

      <Field
        type="password"
        name="password"
        placeholder="Enter Password"
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md font-medium"
      >
        {isEditMode ? "Edit User" : "Add User"}
      </button>

    </Form>
  </Formik>

</div>
  );
};

export default UsersForm;
