import { configureStore } from "@reduxjs/toolkit";
import  UserReducer  from "./slices/UserReducer";

export const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
