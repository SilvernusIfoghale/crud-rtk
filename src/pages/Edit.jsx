import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { editUser, userState } from "../Redux/user/userSlice";

const Edit = () => {
  const { id } = useParams();
  const user = useSelector(userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = user.filter((user) => user.id == id);
  const { name, email } = currentUser[0];
  const [data, setData] = useState({
    name,
    email,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser({ id, name: data.name, email: data.email }));
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <div className="flex justify-center items-center h-[100vh] m-3">
        <div className="border-2 bg-slate-100 w-[360px] sm:w-[530px] h-96  flex flex-col px-10 sm:px-16 justify-center">
          <h1 className="font-bold text-gray-800 text-2xl mb-4 text-center">
            Edit User 👨‍💻
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label htmlFor="name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="border-2 w-full p-1.5 rounded-md"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="email" className="block">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="border-2 w-full p-1.5 rounded-md"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md my-5 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
