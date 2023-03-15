import React from "react";
import Sidebar from "../components/sidebar/Sidebar";

export default function AddNewJob() {
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
              <form className="space-y-6">
                <div className="fieldContainer">
                  <label
                    for="lwsJobTitle"
                    className="text-sm font-medium text-slate-300"
                  >
                    Job Title
                  </label>
                  <select
                    id="lwsJobTitle"
                    name="lwsJobTitle"
                    autoComplete="lwsJobTitle"
                    required
                  >
                    <option value="" hidden selected>
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
                  <label for="lwsJobType">Job Type</label>
                  <select
                    id="lwsJobType"
                    name="lwsJobType"
                    autoComplete="lwsJobType"
                    required
                  >
                    <option value="" hidden selected>
                      Select Job Type
                    </option>
                    <option>Full Time</option>
                    <option>Internship</option>
                    <option>Remote</option>
                  </select>
                </div>

                <div className="fieldContainer">
                  <label for="lwsJobSalary">Salary</label>
                  <div className="flex border rounded-md shadow-sm border-slate-600">
                    <span className="input-tag">BDT</span>
                    <input
                      type="number"
                      name="lwsJobSalary"
                      id="lwsJobSalary"
                      required
                      className="!rounded-l-none !border-0"
                      placeholder="20,00,000"
                    />
                  </div>
                </div>

                <div className="fieldContainer">
                  <label for="lwsJobDeadline">Deadline</label>
                  <input
                    type="date"
                    name="lwsJobDeadline"
                    id="lwsJobDeadline"
                    required
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
