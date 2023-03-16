import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/job/JobSlice";

export default function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <>
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}
