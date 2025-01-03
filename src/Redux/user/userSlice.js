import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../../Data/data";

const userSlice = createSlice({
  name: "users",
  initialState: usersList,
  reducers: {},
});

export const userState = (state) => state.users;
export default userSlice.reducer;
