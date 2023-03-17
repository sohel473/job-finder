import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getJobs, getJob, addJob, updateJob, deleteJob } from "./JobAPI";

const initialState = {
  jobs: [],
  job: {},
  filter: "all",
  search: "",
  sort: "default",
  isLoading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk("job/fetchJobs", async () => {
  const response = await getJobs();

  return response;
});

export const fetchJob = createAsyncThunk("job/fetchJob", async (id) => {
  const response = await getJob(id);

  return response;
});

export const createJob = createAsyncThunk("job/createJob", async (job) => {
  const response = await addJob(job);
  return response;
});

export const editJob = createAsyncThunk("job/updateJob", async (job) => {
  const response = await updateJob(job.id, job);

  return response;
});

export const removeJob = createAsyncThunk("job/deleteJob", async (id) => {
  const response = await deleteJob(id);
  console.log(response);
  return response;
});

export const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.job = action.payload;
      })
      .addCase(fetchJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = [...state.jobs, action.payload];
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        );
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = state.jobs.filter(
          (job) => job.id !== action.meta.arg
        );
      })
      .addCase(removeJob.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default jobSlice.reducer;
export const { setJobFilter, setSearch, setSort } = jobSlice.actions;
