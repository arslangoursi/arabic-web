import React, { useState } from "react";
import FavouriteProducts from "../components/FavouriteProducts";
import Footer from "../components/Footer";

export default function Favourite() {
  const [isData, setData] = useState(true);
  return (
    <>
      <div className="favourite__content">
        <div className="favourite__heading">Favourite</div>
      </div>
      {isData ? <FavouriteProducts /> : <div className="no__data">No data</div>}

      <Footer />
    </>
  );
}
