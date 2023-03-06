import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import CardPopular from "../CardPopular";
import classes from "./Movie.module.css"



import Details from "../DetailsForPC";
import Similar from "../similar";
import Reviews from "../Reviews";
const Movie = () => {
  const [details, setDetails] = useState({});
  const [genres,setGenres] = useState([])
  const [year,setYear] = useState([])

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US`
      );
      const results = await response.json();
      setDetails(results);
      setGenres(results.genres.map(e=>e.name).map((e,i)=>i===0?`${e} ` : `, ${e}`))
      setYear(results.first_air_date.split(`-`)[0])
      console.group(results);
      
    })(); 
  }, [id]);

  return (
    <div className={classes.container} >
      <Details
        // parseFloat(num).toFixed(2);

        title={details.name}
        rating={parseFloat(details.vote_average).toFixed(1)}
        ageRating={details.adult?details.adult:false}
        posterImg={details.poster_path}
        backDropImg={details.backdrop_path}
        overview={details.overview}
        realese_date={year}
        cateigories={genres}
      />

    <Similar id={details.id} kind="tv" />

    <Reviews id={details.id} kind="tv" />
    </div>
  );
};

export default Movie;
