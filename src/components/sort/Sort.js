import React from "react";
import { useDispatch } from "react-redux";
import { setSort } from "../../features/job/JobSlice";

export default function Sort() {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <>
      <select
        id="lws-sort"
        name="sort"
        autoComplete="sort"
        className="flex-1"
        onChange={handleSortChange}
      >
        <option value="default">Default</option>
        <option value="lowToHigh">Salary (Low to High)</option>
        <option value="highToLow">Salary (High to Low)</option>
      </select>
    </>
  );
}
