import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, userState } from "../Redux/user/userSlice";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Home = () => {
  const users = useSelector(userState);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };
  const allUsers = users.map((user, index) => {
    return (
      <tbody key={index} className="text-center">
        <tr>
          <td className="w-10 border-b-2 p-2">{index + 1}</td>
          <td className="w-32 border-b-2 p-2">{user.name}</td>
          <td className="w-40 border-b-2 p-2">{user.email}</td>
          <td className="w-28 border-b-2 p-2 ">
            <div className="flex items-center justify-center">
              <NavLink
                to={`/edit/${user.id}`}
                className="text-blue-500 text-2xl m-1  inline-block hover:scale-[110%]"
              >
                <FaEdit />
              </NavLink>
              <button
                onClick={() => handleDelete(user.id)}
                className="text-red-500 text-2xl m-1 hover:scale-[110%]"
              >
                <MdDeleteForever />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    );
  });
  return (
    <>
      <div className="flex justify-center my-10 mx-5">
        <div className="overflow-x-auto">
          <h1 className="text-2xl font-bold my-2 text-center border-b-2 pb-4">
            Redux CRUD APP
          </h1>
          <NavLink
            to="/create"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md my-5 inline-block "
          >
            Create
          </NavLink>
          <div>
            <table>
              <thead>
                <tr>
                  <th className="w-10 border-b-2 p-2">S/N</th>
                  <th className="w-32 border-b-2 p-2">Name</th>
                  <th className="w-40 border-b-2 p-2">E-mail</th>
                  <th className="w-28 border-b-2 p-2">Action</th>
                </tr>
              </thead>
              {allUsers}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
