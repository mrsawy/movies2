import React from 'react'
import PinkButton from '../../PinkButton'
import classes from "./FirstSectionCarousel.module.css";
import Rate from "./../../Rate";


export default function Swing(props) {
    
  return (
    <section
    className={props.className

    }
  >
    <div className={classes.info}>
      <div className={classes.rate_and_genre}>
        <div className="rate">
          <p>
            <Rate rate={props.rate} className={classes.customRate} />
          </p>
        </div>
        <div className={classes.genre}>
          <p>{`${props.genre[0]} / ${props.genre[1]} / ${props.genre[2]}`}</p>
        </div>
      </div>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.overview}>
       {props.overview}
      </div>
      <div className={classes.btnsContainer}>
        <PinkButton label={`Watch Now`} className={classes.fontSmaller} />
        <PinkButton
          label={`Add To List`}
          className={`${classes.customAddToList} ${classes.fontSmaller}`}
        />
      </div>
    </div>
    <div className={classes.empty}></div>
  </section>  )
}
