import React from "react";
import PropTypes from "prop-types";
import MovieItem from "./MovieItem";

import "./style.scss";

/**
 * @param {Object} props
 * @param {Array} props.data
 * @returns
 */
const MoviesList = (props) => {
  return (
    <div className="movies-list">
      {props.data.map((item, index) => {
        return (
          <MovieItem
            key={index}
            noRightMargin={(index + 1) % 4 == 0}
            poster={item.poster}
            publishYear={item.publishYear}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

MoviesList.propTypes = {
  data: PropTypes.array.isRequired,
};

MoviesList.defaultProps = {
  data: [],
};

export default MoviesList;
