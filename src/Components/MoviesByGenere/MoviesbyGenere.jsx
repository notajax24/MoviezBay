import React from "react";
import GenereList from "./GenereList";
import CardComp from "../Card/CardComp";

function MoviesbyGenere() {
  return (
    <div className="overflow-hidden ">
      {GenereList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-white px-20 py-10">
                {item.name}
              </h2>
              <CardComp genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default MoviesbyGenere;
