import React, { useState } from "react";
import ReadMoreButton from "./ReadMoreButton";
import classes from "./ReviewCard.module.css";

const ReviewCard = (props) => {
  const [full, setFull] = useState(false);
  // const [btnlabel , setButtonLabel] = useState(`Read more`)

  return (
    <>
      <section className={classes.info}>
        <p className={classes.reviewed_by}>Reviewed by </p>
        <svg
          className="ipl-icon   "
          xmlns="http://www.w3.org/2000/svg"
          fill="#cf639b"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>{" "}
        <span className={classes.name}>{props.author}</span>
      </section>
      <section className={classes.content}>
        <p>{props.appear}</p>{" "}
        {full && <span className={classes.more}>{props.maybe}</span>}
        {props.maybe && (
          <ReadMoreButton
            onClick={() => {
              full ? setFull(false) : setFull(true);
            }}
            label={full ? `Read less` : `Read more`}
          />
        )}
      </section>
      <hr className={classes.review_hr} />
    </>
  );
};

export default ReviewCard;
