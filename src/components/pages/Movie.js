import React, { useState, useEffect } from "react";
import { Route, useParams } from "react-router-dom";
import classes from "./Movie.module.css";

import DetailsForPC from "../DetailsForPC";
import Similar from "../similar";
import Reviews from "../Reviews";
import DetailsForMobile from "../DetailsForMobile";

const Movie = (props) => {
  const [details, setDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState([]);

  let width = window.innerWidth;

  const { id } = useParams();
  console.log(width);

  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US`
      );
      const results = await response.json();
      setDetails(results);
      setGenres(
        results.genres.map((e) => e.name)
        // .map((e, i) => (i === 0 ? `${e} ` : `, ${e}`))
      );
      setYear(results.release_date.split(`-`)[0]);
      console.group(results);
    })();
  }, [id]);

  return (
    <div className={classes.container}>

      {/* <Route path="/movies" element={<h1>hiiiiiiiii</h1>} /> */}
         
      
      {+width > 500 ? (
        <DetailsForPC
          title={details.title}
          rating={parseFloat(details.vote_average).toFixed(1)}
          ageRating={details.adult}
          posterImg={details.poster_path}
          backDropImg={details.backdrop_path}
          overview={details.overview}
          realese_date={year}
          cateigories={genres}
        />
      ) : (
        <DetailsForMobile
          overview={details.overview ? details.overview : ``}
          posterImg={details.poster_path}
          title={details.title}
          rate={parseFloat(details.vote_average).toFixed(1)}
          genres={genres.filter((e, i) => i < 3 && e)}
          duration={
            details.runtime
              ? ((e) => `${Math.floor(e / 60)}h ${e % 60}m`)(+details.runtime)
              : ` `
          }
          adult={details.adult && details.adult}
        />
      )}

      <Similar id={details.id} kind="movie" />

      <Reviews id={details.id} kind="movie" />
    </div>
  );
};

export default Movie;
