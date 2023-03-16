import React from "react";
import Jobs from "../components/jobs/Jobs";
import Search from "../components/search/Search";
import Sidebar from "../components/sidebar/Sidebar";
import Sort from "../components/sort/Sort";

export default function Home() {
  return (
    <>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <Sidebar />
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
          <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
              <h1 className="section-title">All Available Jobs</h1>
              <div className="flex gap-4">
                {/* Search Job */}
                <Search />

                {/* Sort Job */}
                <Sort />
              </div>
            </div>

            {/* Job List */}
            <Jobs />
          </main>
        </div>
      </div>
    </>
  );
}
