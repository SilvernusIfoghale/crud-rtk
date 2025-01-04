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
  },
});

export const { addUser } = userSlice.actions;
export const userState = (state) => state.users;
export default userSlice.reducer;
