import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Student = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);

  // Navigate to Add Student page
  const handleAddStudent = () => {
    navigate("/addStudent");
  };

  // Get all students
  const getStudents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getStudent"
      );

      console.log(response.data);

      setStudents(response.data.students);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  // Edit student
  const handleEdit = (id) => {
    console.log("Edit student:", id);
  };

  // Delete student
  const handleDelete = (id) => {
    console.log("Delete student:", id);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Page</h1>

        <button
          onClick={handleAddStudent}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md font-medium"
        >
          + Add Student
        </button>
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Phone</th>
              <th className="border border-gray-300 px-4 py-2">Gender</th>
              <th className="border border-gray-300 px-4 py-2">Roll No</th>
              <th className="border border-gray-300 px-4 py-2">Course</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">
                  {student.name}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {student.email}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {student.address}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {student.phone}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {student.gender}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {student.rollNo}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  {student.course}
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(student._id)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(student._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
