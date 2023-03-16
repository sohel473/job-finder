import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Job from "./Job";
import { fetchJobs } from "../../features/job/JobSlice";

export default function Jobs() {
  const dispatch = useDispatch();
  const { jobs, isLoading, error } = useSelector((state) => state.job);

  React.useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  let content = null;

  if (isLoading) {
    content = <div className="text-center">Loading...</div>;
  } else if (error) {
    content = <div className="text-center">{error}</div>;
  } else if (jobs.length > 0) {
    content = jobs.map((job) => <Job key={job.id} job={job} />);
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
