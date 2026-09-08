import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsersForm = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const handleRegister = () => {
    navigate("/addUser");
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/getUser");

      console.log(response.data);

      setUsers(response.data.users);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this user?",
      );
      if (!confirmDelete) {
        return;
      }
      await axios.delete(`http://localhost:3000/api/deleteUser/${id}`);

      setUsers(users.filter((user) => user._id !== id));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to delete user");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-6 ">

          <button
            onClick={handleRegister}
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white px-5 py-2 rounded-lg font-medium shadow-md transition duration-200"
          >
            Register User
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-5 py-3 text-left">Name</th>
                <th className="px-5 py-3 text-left">Email</th>
                <th className="px-5 py-3 text-left">Password</th>
                <th className="px-5 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="border-b hover:bg-gray-100 transition duration-200"
                >
                  <td className="px-5 py-4 text-gray-700 font-medium">
                    {user.name}
                  </td>

                  <td className="px-5 py-4 text-gray-600">{user.email}</td>

                  <td className="px-5 py-4 text-gray-600">{user.password}</td>

                  <td className="px-5 py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => navigate(`/editUser/${user._id}`)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm transition duration-200"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm transition duration-200"
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
    </div>
  );
};

export default UsersForm;
