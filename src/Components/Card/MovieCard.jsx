import React from "react";
const BASE_IAMGE_URL = "https://images.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        className="w-[110px] md:w-[250px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in"
        src={BASE_IAMGE_URL + movie.poster_path}
      />
    </>
  );
}

export default MovieCard;
