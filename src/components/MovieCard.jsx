import React from "react";

const MovieCard = ({ disc }) => {
  console.log(disc);
  return (
    <div className="movie">
      <div>
        <p>{disc.Year}</p>
      </div>

      <div>
        <img
          src={
            disc.Poster !== "N/A"
              ? disc.Poster
              : "https://via.placeholder.com/400"
          }
        />
      </div>

      <div>
        <span>{disc.Type}</span>
        <h3>{disc.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
