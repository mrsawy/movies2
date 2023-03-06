import React, { useState, useEffect } from "react";
import PeapleCard from "./PeopleCard";
import classes from "./PeoplePage.module.css";

const PeoplePage = () => {
  const [peopleArray, setPeopleArray] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`
      );
      const data = await response.json();
      const results = data.results;
      setPeopleArray(results);
      console.log(results)
    })();
  }, []);
  return (
    <>
      <div className={classes.container}>
        {peopleArray.map(e=><PeapleCard 
            key={e.id}
            name={e.name}
            img={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.profile_path}`}
            info={e.known_for.map(movie=>movie.original_name?movie.original_name:movie.original_title).map((e,i)=>i===0?`${e} ` : `, ${e}`)}

        />)}
    
      </div>
    </>
  );
};

export default PeoplePage;
