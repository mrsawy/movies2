import React, { useState, useEffect } from "react";
import Similar from "../../similar";
import classes from "./TrendingSection.module.css";
import trend from "./../../../images/icons/trend (3).png";


export default function TrendingSection(props) {
  const [mediaType, setMediaType] = useState(`movie`);
  const [timePeriod, setTimePeriod] = useState(`day`);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/trending/${mediaType}/${timePeriod}?api_key=6d2292cf6936acd6b878f58decae96c6`
  );
  useEffect(() => {
    setUrl(
      `https://api.themoviedb.org/3/trending/${mediaType}/${timePeriod}?api_key=6d2292cf6936acd6b878f58decae96c6`
    );
  }, [mediaType, timePeriod]);
  return (
    <section className={classes.trending}>
      <div className={classes.sidemovies}>
        <Similar
          url={url}
          noTransition={true}
          titleComponent={(props) => {
            return (
              <div className={`${props.className} ${classes.headermovies} ${classes.padingleft10} `}>
                <h2 className={classes.trendingTitle}>trending <img src={trend} alt="trend"/></h2>
                <div className={`${classes.headermovies} ${classes.movieSelectors}`}>
                  <p
                    className={`${mediaType == `movie` && classes.choosen} ${
                      classes.filters
                    }`}
                    onClick={() => {
                      setMediaType(`movie`);
                    }}
                  >
                    Movies
                  </p>
                  <p
                    className={`${mediaType == `tv` && classes.choosen} ${
                      classes.filters
                    }`}
                    onClick={() => {
                      setMediaType(`tv`);
                    }}
                  >
                    Series
                  </p>
                  <p style={{ color: `grey` }} className={classes.specialchar}>/</p>
                  <p
                    className={`${timePeriod == `day` && classes.choosen} ${
                      classes.filters
                    }`}
                    onClick={() => {
                      setTimePeriod(`day`);
                    }}
                    // style={{"min-width":`32px`}}
                  >
                    Day
                  </p>
                  <p
                    className={`${timePeriod == `week` && classes.choosen} ${
                      classes.filters
                    }`}
                    onClick={() => {
                      setTimePeriod(`week`);
                    }}
                  >
                    Weak
                  </p>
                </div>
              </div>
            );
          }}
          notitle={true}
          kind={`movie`}
          noHr={true}
        />
      </div>
    </section>
  );
}

// const TitleComponent = (props) => {
//   const [mediaType, setMediaType] = useState(`movies`);
//   const [timePeriod, setTimePeriod] = useState(`day`);

//   return (
//     <div className={`${classes.headermovies} ${props.className}`}>
//       <h2>trending</h2>
//       <div className={classes.headermovies}>
//         <p
//         className={mediaType == `movies` && classes.choosen}
//         >Movies</p>
//         className={mediaType == `Series` && classes.choosen}
//         <p>Series</p>
//         <p style={{ color: `grey` }}>/</p>
//         <p className={mediaType == `day` && classes.choosen}>Day</p>
//         <p className={mediaType == `weak` && classes.choosen}>Weak</p>
//       </div>
//     </div>
//   );
// };
