import React from "react";
import classes from "./Rate.module.css";

const Rate = (props) => {
  return (
    <div className={` ${props.className}`}>
      <div className={`${classes.rate} ${props.className}`}>
        <div className={classes.scale}>
          <p>{props.rate ? props.rate : 0}</p>
          <div className={classes.stars}>
            <span
              className={`fa fa-star ${props.rate > 2 ? "checked" : " "}`}
            ></span>
            <span
              className={`fa fa-star ${props.rate > 4 ? "checked" : " "}`}
            ></span>
            <span
              className={`fa fa-star ${props.rate > 6 ? "checked" : " "}`}
            ></span>
            <span
              className={`fa fa-star ${props.rate > 7.5 ? "checked" : " "}`}
            ></span>
            <span
              className={`fa fa-star ${props.rate > 8.5 ? "checked" : " "}`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rate;
