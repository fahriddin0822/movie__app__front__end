import React, { memo, useEffect, useState } from "react";
import { request } from "@/api";
import Carousel from "@/components/carousel/Carousel";
import Movies from "@/components/movies/Movies";
import Pagination from "@mui/material/Pagination";
import Genre from "@/components/genre/Genre";
import Search from "@/pages/search/Search";

const Home = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1); // Reset to first page on new search
  };

  useEffect(() => {
    if (searchQuery) {
      // Fetch movies based on search query
      request("/search/movie", {
        params: { query: searchQuery, page },
      }).then((res) => setData(res.data));
    } else {
      // Fetch default movies
      request("/discover/movie", {
        params: {
          page,
          with_genres: selectedGenre.join(","),
        },
      }).then((res) => setData(res.data));
    }
  }, [page, searchQuery, selectedGenre]);

  useEffect(() => {
    request.get("/genre/movie/list").then((res) => setGenres(res.data.genres));
  }, []);

  return (
    <div className="dark:bg-secondary dark:text-white bg-white text-black">
      <Search onSearch={handleSearch} />
      <Carousel data={data} />
      <Genre
        setPage={setPage}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        data={genres}
      />
      <Movies data={data} />
      <div className="flex justify-center py-6">
        <Pagination
          page={page}
          onChange={handleChange}
          count={data?.total_pages <= 500 ? data?.total_pages : 500}
        />
      </div>
    </div>
  );
};

export default memo(Home);
