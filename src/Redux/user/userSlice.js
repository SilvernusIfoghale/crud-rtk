import { createSlice, nanoid } from "@reduxjs/toolkit";
import { usersList } from "../../Data/data";

const userSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, email) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
          },
        };
      },
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const editObject = state.find((user) => user.id == id);
      if (editObject) {
        editObject.name = name;
        editObject.email = email;
      }
    },
    deleteUser(state, action) {
      const { id } = action.payload;
      const deleteObject = state.find((user) => user.id == id);
      if (deleteObject) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export const userState = (state) => state.users;
export default userSlice.reducer;
