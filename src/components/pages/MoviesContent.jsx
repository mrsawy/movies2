import React from "react";
import classes from "./MoviePage.module.css";
import { Link, Outlet, Route } from "react-router-dom";
import Card from "../CardPopular";

export default function MoviesContent(props) {
  console.log(props.moviesArray);
  return (
    <div className={classes.content}>
      {props.moviesArray.length > 0 &&
        props.moviesArray.map((e) => {
          return (
            <Link
              className={classes.card_link}
              to={`/movies/${e.id}`}
              key={e.id}
            >
              <Card
                className={`${classes.customCardPehavior} ${props.cardClasses}`}
                title={
                  e.title
                    ? e.title.split(` `).length < 7
                      ? e.title
                      : e.title.split(`:`)[0]
                    : e.name
                    ? e.name.split(` `).length < 7
                      ? e.name
                      : e.name.split(`:`)[0]
                    : `No Title `
                }
                date={e.release_date ? e.release_date : ``}
                rate={e.vote_average}
                img={`https://www.themoviedb.org/t/p/w220_and_h330_face${e.poster_path}`}
              />
            </Link>
          );
        })}
    </div>
  );
}
