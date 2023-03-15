import React from "react";

export default function Search() {
  return (
    <>
      <div className="search-field group flex-1">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input
          type="text"
          placeholder="Search Job"
          className="search-input"
          id="lws-searchJob"
        />
      </div>
    </>
  );
}
