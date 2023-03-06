import React, { useEffect, useState } from "react";
import classes from "./similar.module.css";
import Card from "./CardPopular";
import { Link } from "react-router-dom";
const Similar = (props) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const response = props.id ? await fetch(
        `https://api.themoviedb.org/3/${props.kind}/${props.id}/similar?api_key=6d2292cf6936acd6b878f58decae96c6&language=en-US&page=1`
      ):await fetch(props.url)

      
      const results = await response.json();

      console.log(results.results);
      setSimilarMovies(results.results);
    })();
  }, [props.id, props.kind,props.url]);
  return (
    <>
      {!props.notitle && (
        <div className={`${classes.similar_title} ${classes.staticTitle}`}>Similar Movies</div>
      )}

      {props.titleComponent &&  <props.titleComponent className={`${classes.similar_title} ${classes.paddingtop}`} />}
      <section className={`${classes.similar_section} ${!props.noTransition && classes.transitionUp}`}>
        {props.kind === "movie" && similarMovies
          ? similarMovies.map((e) => (
              <Link
                key={e.id}
                style={{ color: `black` }}
                to={`/${props.kind === `movie` ? `movies` : `tv`}/${e.id}`}
              >
                <Card
                  className={classes.card_style}
                  title={ e.title?
                    e.title.split(` `).length < 7
                      ? e.title
                      : e.title.split(`:`)[0]:e.name
                  }
                  date={
                    e.release_date ? parseFloat(e.release_date).toFixed(1) : ``
                  }
                  rate={parseFloat(e.vote_average).toFixed(1)}
                  img={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`}
                />
              </Link>
            ))
          : []}
        {props.kind === "tv" && similarMovies
          ? similarMovies.map((e, i) => (
              <Card
                className={`${classes.card_style} ${
                  i === 0 ? classes.margin : ``
                } `}
                title={
                  e.name.split(` `).length < 7 ? e.name : e.name.split(`:`)[0]
                }
                date={
                  e.first_air_date
                    ? parseFloat(e.first_air_date).toFixed(1)
                    : ``
                }
                rate={parseFloat(e.vote_average).toFixed(1)}
                img={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`}
              />
            ))
          : []}
      </section>
      {!props.noHr && <hr className={classes.similar_hr} />}
    </>
  );
};

export default Similar;
