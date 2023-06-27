import React, { useState } from "react";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function Search() {
  const [isData, setData] = useState(false);
  return (
    <>
      <div className="favourite__content">
        <div className="favourite__heading">Search</div>
        <div className="favourite__content__search">
          <input placeholder="Search here..." />
          <svg
            width="40"
            height="41"
            viewBox="0 0 46 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.1436 36.1954L30.7101 35.7619L30.199 36.1005C22.8295 40.983 12.802 40.1767 6.30937 33.6841C-1.10312 26.2716 -1.10312 14.2536 6.30937 6.84111C13.7219 -0.571386 25.7399 -0.571386 33.1524 6.84111C39.645 13.3337 40.4513 23.3613 35.5688 30.7308L35.2302 31.2418L35.6637 31.6753L44.3139 40.3255C45.562 41.5737 45.562 43.5974 44.3139 44.8456C43.0657 46.0938 41.042 46.0938 39.7938 44.8456L31.1436 36.1954ZM28.6323 29.1641C33.5484 24.2479 33.5484 16.2773 28.6323 11.3612C23.7162 6.44506 15.7456 6.44506 10.8294 11.3612C5.91332 16.2773 5.91332 24.2479 10.8294 29.1641C15.7456 34.0802 23.7162 34.0802 28.6323 29.1641Z"
              fill="black"
              stroke="white"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
      {isData ? "data" : <div className="no__data">Not Found</div>}

      <Footer />
    </>
  );
}
