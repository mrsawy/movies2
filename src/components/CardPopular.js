import React from "react";
import classes from "./Card.module.css";
import Rate from "./Rate";

const Card = (props) => {
  return (
    <div className={`${classes.holeDiv} ${props.className}`} >
      <div
        style={{ backgroundImage: `url(${props.img})` }}
        className={classes.container}
      >
        <Rate className={classes.customRate} rate={props.rate} />
      </div>
      <section className={classes.info}>
        <div className={`${classes.title} ${props.title.length>14 && classes.titleSmall  }`}>{props.title}</div>
        <div className={classes.date}>{props.date.split(``).slice(0,4).join(``)}</div>
      </section>
    </div>
  );
};

export default Card;
