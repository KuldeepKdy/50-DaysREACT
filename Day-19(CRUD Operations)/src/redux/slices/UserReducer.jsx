import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Data";
export const UserReducer = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = UserReducer.actions;

export default UserReducer.reducer;
