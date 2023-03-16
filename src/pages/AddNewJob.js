import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { format } from "date-fns";
import Sidebar from "../components/sidebar/Sidebar";
import { createJob } from "../features/job/JobSlice";

export default function AddNewJob() {
  const dispatch = useDispatch();

  const [jobForm, setJobForm] = useState({
    lwsJobTitle: "",
    lwsJobType: "",
    lwsJobSalary: "",
    lwsJobDeadline: "",
  });

  const handleChange = (e) => {
    setJobForm({
      ...jobForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedSalary = Number(jobForm.lwsJobSalary).toLocaleString();
    const formattedDeadline = format(
      new Date(jobForm.lwsJobDeadline),
      "MMMM d, yyyy"
    );

    const formattedJob = {
      id: Date.now().toString(),
      title: jobForm.lwsJobTitle,
      type: jobForm.lwsJobType,
      salary: formattedSalary,
      deadline: formattedDeadline,
    };

    dispatch(createJob(formattedJob));
  };

  return (
    <>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
        <Sidebar />
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <h1 className="mb-10 text-center section-title">
              Add New Job
            </h1>

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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                      onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
                <div className="text-right">
                  <input
                    type="submit"
                    value="Save"
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
