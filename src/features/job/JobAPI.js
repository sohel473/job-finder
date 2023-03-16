import axios from "../../utils/axios";

export const getJobs = async () => {
  const response = await axios.get("/jobs");

  return response.data;
};

export const getJob = async (id) => {
  const response = await axios.get(`/jobs/${id}`);

  return response.data;
};

export const addJob = async (job) => {
  const response = await axios.post("/jobs", job);

  return response.data;
};

export const updateJob = async (id, job) => {
  const response = await axios.put(`/jobs/${id}`, data);

  return response.data;
};

export const deleteJob = async (id) => {
  const response = await axios.delete(`/jobs/${id}`);

  return response.data;
};
