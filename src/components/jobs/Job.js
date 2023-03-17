import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeJob } from "../../features/job/JobSlice";

export default function Job(props) {
  const { job } = props;
  const dispatch = useDispatch();

  const handleDelete = () => {
    window.confirm("Are you sure you want to delete this job?") &&
      dispatch(removeJob(job.id));
  };

  let jobColor = "";
  if (job.type === "Full Time") {
    jobColor = "#FF8A00";
  } else if (job.type === "Internship") {
    jobColor = "#FF5757";
  } else if (job.type === "Remote") {
    jobColor = "#56E5C4";
  }

  return (
    <>
      <div className="job">
        <div className="flex-1 min-w-0">
          <h2 className="lws-title">{job.title}</h2>
          <div className="job-footers">
            <div className="lws-type">
              {/* <!-- Fulltime - #FF8A00,  --><!-- Internship - #FF5757,  --><!-- Remote - #56E5C4,  --> */}
              <i
                className={`fa-solid fa-stop !text-[${jobColor}] text-lg mr-1.5`}
              ></i>
              {job.type}
            </div>
            <div className="lws-salary">
              <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5"></i>
              {job.salary}
            </div>
            <div className="lws-deadline">
              <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5"></i>
              {job.deadline}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block">
            <Link
              to={`/editJob/${job.id}`}
              className="lws-edit btn btn-primary"
            >
              <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2"></i>
              Edit
            </Link>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="lws-delete btn btn-danger "
              onClick={handleDelete}
            >
              <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2"></i>
              Delete
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
