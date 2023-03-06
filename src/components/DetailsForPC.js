import React from "react";
import classes from "./DetailsForPC.module.css";

const Details = (props) => {
  return (
    <>
      <div style={{}} className={classes.movie_container}>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5), rgba(10, 11, 71, 0)),
        url('https://image.tmdb.org/t/p/w220_and_h330_face/${props.backDropImg}')`,
          }}
          className={classes.background}
        >
          {" "}
        </div>
        <div
          // style={{backgroundImage:`url('https://image.tmdb.org/t/p/w220_and_h330_face/${props.posterImg}')`}}
          className={classes.poster}
        >
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.posterImg}`}
              alt="movie"
            />
          </div>
          <div className={classes.watch_now}>watch now</div>
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <p>
              {props.title}{" "}
              <span className={classes.year}>{props.realese_date}</span>
            </p>
          </div>
          <div className={classes.basic_info}>
            <span>{props.ageRating}</span>
            <p>{props.cateigories.slice(0, 4)}</p>
            {/* <span>duration</span> */}
          </div>
          <div className={classes.user_score}>{props.rating}</div>
          <p>You better watch out.</p>
          <div className={classes.overview}>
            <p>overview</p>
            <br />
            <p>{props.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
