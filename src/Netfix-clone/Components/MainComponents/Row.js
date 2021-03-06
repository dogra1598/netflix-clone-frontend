import React, { useState, useEffect } from "react";

import axios from "../../../axios";
import "./Row.css";

const base_poster_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_poster_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
