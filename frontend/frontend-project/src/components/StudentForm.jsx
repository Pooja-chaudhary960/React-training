import { useFormik } from "formik";
import axios from "axios";
;

const StudentForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      gender: "",
      rollNo: "",
      course: "",
    },
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Add Student</h1>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="address"
          placeholder="Enter Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          name="rollNo"
          placeholder="Enter Roll Number"
          value={formik.values.rollNo}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={formik.values.course}
          onChange={formik.handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
