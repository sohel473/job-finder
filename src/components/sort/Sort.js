import React from "react";

export default function Sort() {
  return (
    <>
      <select
        id="lws-sort"
        name="sort"
        autoComplete="sort"
        className="flex-1"
      >
        <option>Default</option>
        <option>Salary (Low to High)</option>
        <option>Salary (High to Low)</option>
      </select>
    </>
  );
}
