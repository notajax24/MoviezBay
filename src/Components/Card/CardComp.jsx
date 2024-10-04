import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HrMovieCard from "./HrMovieCard";

function CardComp({ genreId, index_ }) {
  const [generList, setGenerList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenreId();
  }, []);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log(resp.data.results);
      setGenerList(resp.data.results);
    });
  };
  const sliderRight = (element) => {
    element.scrollLeft += 900;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 900;
  };
  return (
    <div className="">
      <FaArrowLeft
        className={`hidden md:block z-10 text-white  text-[20px] absolute mx-10  cursor-pointer scroll-smooth  ${
          index_ % 2 == 0 ? "my-[100px]" : "my-[200px]"
        }`}
        onClick={() => sliderLeft(elementRef.current)}
      />
      <FaArrowRight
        className={`hidden md:block z-10 text-white  text-[20px] absolute mx-10  cursor-pointer right-0 scroll-smooth ${
          index_ % 2 == 0 ? "my-[100px]" : "my-[200px]"
        }`}
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        ref={elementRef}
        className="flex w-full gap-10 px-20 py-10 overflow-x-auto  scrollbar-none scroll-smooth"
      >
        {generList.map((item, index) => (
          <>
            {index_ % 2 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default CardComp;
