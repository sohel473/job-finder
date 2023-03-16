import { configureStore } from "@reduxjs/toolkit";
import JobSlice from "../features/job/JobSlice";

export const store = configureStore({
  reducer: {
    job: JobSlice,
  },
});
