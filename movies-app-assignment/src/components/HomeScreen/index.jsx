import React from "react";
import Navbar from "../Navbar";
import MoviesList from "../Movies/MoviesList";
import AppPagination from "../AppPagination";

import { moviesData } from "./data";

import "./style.scss";

const HomeScreen = () => {
  const [data, setData] = React.useState([]);

  const getRecordsByPage = (currentPage, pageLimit) => {
    const startIndex = (currentPage - 1) * pageLimit;
    const endIndex = startIndex + pageLimit;
    const recordsOnPage = moviesData.slice(startIndex, endIndex);

    setData(recordsOnPage);
    return recordsOnPage;
  };
  return (
    <div className="home-screen">
      <Navbar />
      <MoviesList data={data} />
      <AppPagination
        totalRecords={moviesData.length}
        onChange={getRecordsByPage}
      />
    </div>
  );
};

export default HomeScreen;
