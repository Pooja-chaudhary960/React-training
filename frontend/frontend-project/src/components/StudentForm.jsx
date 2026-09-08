import { Formik, Form, Field } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentForm = () => {
  const [students, setStudents] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const isEditMode = Boolean(id);
  console.log(id);

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    address: "",
    phone: "",
    gender: "",
    rollNo: "",
    course: "",
  };

  useEffect(() => {
    if (id) {
      fetchStudentById(id);
    }
  }, [id]);

  const fetchStudentById = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3000/api/getStudent/${id}`,
      );
      console.log(response);

      const studentData = response.data.student;
      setStudents(studentData);
      setLoading(false);
    } catch (error) {
      console.error("Error occurred:", error);
      setLoading(false);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log(values);

    try {
      if (id) {
        await axios.put(`http://localhost:3000/api/updateStudent/${id}`, values);
      } else {
        await axios.post("http://localhost:3000/api/students", values);
      }
      navigate("/student");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {isEditMode ? "Edit Student" : "Add Student"}
      </h1>

      <Formik
        initialValues={students || initialValues}
        enableReinitialize={true}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <Field
            type="text"
            name="name"
            placeholder="Enter Name"
            className="w-full border p-2 rounded"
          />

          <Field
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border p-2 rounded"
          />

          <Field
            type="text"
            name="address"
            placeholder="Enter Address"
            className="w-full border p-2 rounded"
          />

          <Field
            type="text"
            name="phone"
            placeholder="Enter Phone"
            className="w-full border p-2 rounded"
          />

          <Field
            as="select"
            name="gender"
            className="w-full border p-2 rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>

          <Field
            type="text"
            name="rollNo"
            placeholder="Enter Roll Number"
            className="w-full border p-2 rounded"
          />

          <Field
            type="text"
            name="course"
            placeholder="Enter Course"
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded"
          >
            {isEditMode ? "Edit Student" : "Add Student"}
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;
