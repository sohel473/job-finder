import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Job from "./Job";
import { fetchJobs } from "../../features/job/JobSlice";

export default function Jobs() {
  const dispatch = useDispatch();
  const { jobs, filter, search, sort, isLoading, error } = useSelector(
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
        return true;
    }
  });

  // Filter jobs based on the search input
  const searchedJobs = filteredJobs.filter((job) => {
    return job.title.toLowerCase().includes(search.toLowerCase());
  });

  // Sort jobs based on the selected sort
  const sortedJobs = searchedJobs.sort((a, b) => {
    const aSalary = Number(a.salary.replace(/,/g, ""));
    const bSalary = Number(b.salary.replace(/,/g, ""));

    switch (sort) {
      case "lowToHigh":
        return aSalary - bSalary;
      case "highToLow":
        return bSalary - aSalary;
      default:
        return 0;
    }
  });

  console.log("sortedJobs:", sortedJobs);

  let content = null;

  if (isLoading) {
    content = <div className="text-center">Loading...</div>;
  } else if (error) {
    content = <div className="text-center">{error}</div>;
  } else if (sortedJobs.length > 0) {
    content = sortedJobs.map((job) => <Job key={job.id} job={job} />);
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
