import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query); // Call parent-provided search function
  };

  return (
    <div className="container py-4">
      <form
        className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-[800px] mx-auto"
        onSubmit={handleSearch}
      >
        <input
          className="flex-1 p-2 outline-none"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies, genres, or keywords..."
        />
        <button
          type="submit"
          className="bg-gray-200 px-4 py-2 hover:bg-gray-300 transition"
        >
          <CiSearch size={24} />
        </button>
      </form>
    </div>
  );
};

export default Search;
