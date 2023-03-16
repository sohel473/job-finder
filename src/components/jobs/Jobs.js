import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Job from "./Job";
import { fetchJobs } from "../../features/job/JobSlice";

export default function Jobs() {
  const dispatch = useDispatch();
  const { jobs, filter, isLoading, error } = useSelector(
    (state) => state.job
  );

  React.useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // Filter jobs based on the selected filter
  const filteredJobs = jobs.filter((job) => {
    switch (filter) {
      case "internship":
        return job.type === "Internship";
      case "fulltime":
        return job.type === "Full Time";
      case "remote":
        return job.type === "Remote";
      default:
        return true; // Show all jobs if no filter is applied
    }
  });

  let content = null;

  if (isLoading) {
    content = <div className="text-center">Loading...</div>;
  } else if (error) {
    content = <div className="text-center">{error}</div>;
  } else if (filteredJobs.length > 0) {
    content = filteredJobs.map((job) => <Job key={job.id} job={job} />);
  } else {
    content = <div className="text-center">No jobs found</div>;
  }
  return (
    <>
      <div className="jobs-list ">
        {/* <!-- Single Job 1--> */}
        {content}
        {/* <!-- Single Job 1--> */}
      </div>
    </>
  );
}
