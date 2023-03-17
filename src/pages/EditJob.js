import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";
import { fetchJob, editJob } from "../features/job/JobSlice";
import { format } from "date-fns";

export default function EditJob() {
  const dispatch = useDispatch();
  const job = useSelector((state) => state.job.job);
  const [extraJobTitle, setExtraJobTitle] = useState("");

  const [jobForm, setJobForm] = useState({
    lwsJobTitle: "",
    lwsJobType: "",
    lwsJobSalary: "",
    lwsJobDeadline: "",
  });

  const { jobId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchJob(jobId));
  }, [dispatch, jobId]);

  useEffect(() => {
    const jobTitles = [
      "Software Engineer",
      "Software Developer",
      "Full Stack Developer",
      "MERN Stack Developer",
      "DevOps Engineer",
      "QA Engineer",
      "Product Manager",
      "Social Media Manager",
      "Senior Executive",
      "Junior Executive",
      "Android App Developer",
      "IOS App Developer",
      "Frontend Developer",
      "Frontend Engineer",
    ];

    if (job.title && !jobTitles.includes(job.title)) {
      setExtraJobTitle(job.title);
    } else {
      setExtraJobTitle("");
    }

    setJobForm({
      lwsJobTitle: job.title || "",
      lwsJobType: job.type || "",
      lwsJobSalary: job.salary
        ? parseInt(job.salary.replace(/,/g, ""), 10)
        : "",
      lwsJobDeadline: job.deadline
        ? format(new Date(job.deadline), "yyyy-MM-dd")
        : "",
    });
  }, [job]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobForm({ ...jobForm, [name]: value });
  };

  // console.log("Before update");
  // console.log(job);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedSalary = Number(jobForm.lwsJobSalary).toLocaleString();
    const formattedDeadline = format(
      new Date(jobForm.lwsJobDeadline),
      "MMMM d, yyyy"
    );

    const formattedJob = {
      id: job.id,
      title: jobForm.lwsJobTitle,
      type: jobForm.lwsJobType,
      salary: formattedSalary,
      deadline: formattedDeadline,
    };
    dispatch(editJob(formattedJob));
    navigate("/");

    // console.log("After update");
    // console.log(formattedJob);
  };

  return (
    <>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <h1 className="mb-10 text-center section-title">Edit Job</h1>

            <div className="max-w-3xl mx-auto">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="fieldContainer">
                  <label
                    htmlFor="lwsJobTitle"
                    className="text-sm font-medium text-slate-300"
                  >
                    Job Title
                  </label>
                  <select
                    id="lwsJobTitle"
                    name="lwsJobTitle"
                    autoComplete="lwsJobTitle"
                    required
                    value={jobForm.lwsJobTitle}
                    onChange={handleInputChange}
                  >
                    <option value="" hidden defaultValue>
                      Select Job
                    </option>
                    <option>Software Engineer</option>
                    <option>Software Developer</option>
                    <option>Full Stack Developer</option>
                    <option>MERN Stack Developer</option>
                    <option>DevOps Engineer</option>
                    <option>QA Engineer</option>
                    <option>Product Manager</option>
                    <option>Social Media Manager</option>
                    <option>Senior Executive</option>
                    <option>Junior Executive</option>
                    <option>Android App Developer</option>
                    <option>IOS App Developer</option>
                    <option>Frontend Developer</option>
                    <option>Frontend Engineer</option>
                    {extraJobTitle && <option>{extraJobTitle}</option>}
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lwsJobType">Job Type</label>
                  <select
                    id="lwsJobType"
                    name="lwsJobType"
                    autoComplete="lwsJobType"
                    required
                    value={jobForm.lwsJobType}
                    onChange={handleInputChange}
                  >
                    <option value="" hidden defaultValue>
                      Select Job Type
                    </option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lwsJobSalary">Salary</label>
                  <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input
                      type="number"
                      name="lwsJobSalary"
                      id="lwsJobSalary"
                      required
                      className="!rounded-l-none !border-0"
                      placeholder="20,00,000"
                      value={jobForm.lwsJobSalary}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="fieldContainer">
                  <label htmlFor="lwsJobDeadline">Deadline</label>
                  <input
                    type="date"
                    name="lwsJobDeadline"
                    id="lwsJobDeadline"
                    required
                    value={jobForm.lwsJobDeadline}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="text-right">
                  <input
                    type="submit"
                    value="Edit"
                    className="lws-submit cursor-pointer btn btn-primary w-fit"
                  />
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
