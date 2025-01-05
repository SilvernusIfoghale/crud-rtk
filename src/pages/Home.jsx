import React from "react";
import { useSelector } from "react-redux";
import { userState } from "../Redux/user/userSlice";
import { NavLink } from "react-router-dom";

const Home = () => {
  const users = useSelector(userState);
  const allUsers = users.map((user, index) => {
    return (
      <tbody key={index}>
        <tr>
          <td className="w-10 border-2 p-2">{index + 1}</td>
          <td className="w-32 border-2 p-2">{user.name}</td>
          <td className="w-32 border-2 p-2">{user.email}</td>
          <td className="w-52 border-2 p-2 ">
            <NavLink
              to={`/edit/${user.id}`}
              className="bg-blue-500 text-white py-1 px-4 rounded-md m-1"
            >
              Edit
            </NavLink>
            <NavLink className="bg-red-500 text-white py-1 px-4 rounded-md m-1">
              Delete
            </NavLink>
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
                  <th className="w-10 border-2 p-2">S/N</th>
                  <th className="w-32 border-2 p-2">Name</th>
                  <th className="w-32 border-2 p-2">E-mail</th>
                  <th className="w-32 border-2 p-2">Action</th>
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
