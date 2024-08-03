import { Button } from "@/ui/button.jsx";
import React, { useEffect } from "react";
import Card from "../Card/Card";
import CardComp from "../Card/CardComp";
import MoviesbyGenere from "../MoviesByGenere/MoviesbyGenere";

function Dashboard() {
  return (
    <>
      <section className="flex bg-cover bg-center md:h-screen bg-[url('https://image.tmdb.org/t/p/original/2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg')]">
        <div className="flex-row mt-40 py-40 px-20 ">
          <h1 className="text-3xl font-semibold font-Poppins text-white text-shadow-gray backdrop-blur-sm	">
            A Quiet Place: Day One
          </h1>
          <span className="text-lg font-Poppins text-white text-wrap backdrop-blur-sm	">
            As New York City is invaded by alien creatures who hunt by sound,
            <br />a woman named Sam fights to survive with her cat.
          </span>
          <div className="flex p-4 gap-4">
            <Button>Play</Button>
            <Button>More Info</Button>
          </div>
        </div>
      </section>
      <section className="w-full h-full object-cover bg-black justify-center">
        <div className="">
          <h1 className="flex px-20 text-2xl py-10 text-white font-semibold font-Poppins">
            Popular this week
          </h1>
          <Card />
        </div>
        <div className="flex">
          <MoviesbyGenere />
        </div>
      </section>
    </>
  );
}

export default Dashboard;
