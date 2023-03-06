import React, { useState, useEffect } from "react";
import classes from "./DetailsForMobile.module.css";
import PinkButton from "./PinkButton";
import Rate from "./Rate";
import ReadMoreButton from "./ReadMoreButton";

const DetailsForMobile = (props) => {
  const [myOverview, setMyOverView] = useState(` `);
  useEffect(() => {
    props.overview.length && props.overview.split(` `).length < 28
      ? setMyOverView(props.overview)
      : setMyOverView(props.overview.split(` `).slice(0, 28).join(` `));
  }, [props.overview]);

  return (
    <>
      <div
        // style={{}}
        className={classes.movie_container}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),
        url('https://image.tmdb.org/t/p/w220_and_h330_face/${props.posterImg}') 
        `,
          }}
          className={classes.poster}
        ></div>

        <section className={classes.titleSection}>
          <div className={classes.title}>{props.title}</div>
          {/* <div className={classes.rate}> 7.5</div> */}
          <Rate rate={props.rate} className={classes.rateCustom} />
        </section>
        <section className={classes.qualities}>
          {props.genres&&props.genres.map((e) => (
            <div>{e===`Science Fiction`?`Si-Fi`:e}</div>
          ))}

          <div>{props.aduld?`+18`:`+13`}</div>
          <div className={classes.duration}>{props.duration}</div>
        </section>
        {props.overview.length && myOverview.length < props.overview.length ? (
          <section className={classes.desc}>
            <p>
              {myOverview}...{" "}
              <ReadMoreButton
                onClick={() => {
                  setMyOverView(props.overview);
                }}
              />{" "}
            </p>
          </section>
        ) : (
          <section className={classes.desc}>
            <p>{myOverview}</p>
          </section>
        )}
        <section className={classes.watchNowSection}>
          <section className={classes.bookMarkAndStar}>
            <div>bm</div>
            <div>star</div>
          </section>
          <PinkButton label="Watch Now" className={classes.customButton} />
        </section>
      </div>
    </>
  );
};

export default DetailsForMobile;

// <div
// style={{}}
// className={classes.movie_container}
// >
// <div

// style={{
//   backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.5), rgba(10, 11, 71, 0)),
// url('https://image.tmdb.org/t/p/w220_and_h330_face/${props.backDropImg}')`,
// }}
//  className={classes.background}> </div>
// <div
// // style={{backgroundImage:`url('https://image.tmdb.org/t/p/w220_and_h330_face/${props.posterImg}')`}}
//  className={classes.poster}>
//   <div>
//     <img
//       src={`https://image.tmdb.org/t/p/w220_and_h330_face/${props.posterImg}`}
//       alt="movie"
//     />
//   </div>
//   <div className={classes.watch_now}>watch now</div>
// </div>
// <div className={classes.info}>
//   <div className={classes.title}>
//     <p>{props.title}   <p className={classes.year}>{props.realese_date}</p></p>

//   </div>
//   <div className={classes.basic_info}>
//     <span>{props.ageRating}</span>
//     <p>{props.cateigories.slice(0,4)}</p>
//     {/* <span>duration</span> */}
//   </div>
//   <div className={classes.user_score}>{props.rating}</div>
//   <p>You better watch out.</p>
//   <div className={classes.overview}>
//     <p>overview</p>
//     <br />
//     <p>{props.overview}</p>
//   </div>
// </div>
// </div>
