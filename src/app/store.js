import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/taskSlice/taskSlice";
import loginSlice from "../features/loginSlice/loginSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice,
    login: loginSlice,
  },
});
