import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const BASE_IAMGE_URL = "https://images.tmdb.org/t/p/original";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Card() {
  const [movieList, setMovieList] = useState([]);
  const [seriesList, setSeriesList] = useState([]);

  const elementRef = useRef();

  useEffect(() => {
    GetMovies();
  }, []);

  useEffect(() => {
    GetSeries();
  }, []);

  // ----------------Movies----------------
  const GetSeries = () => {
    GlobalApi.GetTrendingSeries.then((resp) => {
      console.log(resp.data.results);
      setSeriesList(resp.data.results);
    });
  };

  // -------------------------------------------------

  // ----------------Series----------------
  const GetMovies = () => {
    GlobalApi.GetTrendingMovies.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  // -------------------------------------------------
  const sliderRight = (element) => {
    element.scrollLeft += 1000;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 1000;
  };
  return (
    <div className="">
      <FaArrowLeft
        className="hidden md:block z-10 text-white  text-[20px] absolute mx-10 my-[200px] cursor-pointer scroll-smooth"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <FaArrowRight
        className="hidden md:block z-10 text-white  text-[20px] absolute mx-10 my-[200px] cursor-pointer right-0 scroll-smooth "
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-hidden   w-full py-10 px-20 md:gap-20 gap-5 scroll-smooth z-0 "
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            className="max-sm:w-[200px] h-[400px] object-cover object-left-top  rounded-lg  hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in 
             "
            src={BASE_IAMGE_URL + item.poster_path}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Card;
