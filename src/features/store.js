import { configureStore } from "@reduxjs/toolkit";

import TaskSlice from "./TaskSlice";

const store = configureStore({
  reducer: {
    TaskSlice,
  },
});

export default store;
