import React from "react";
// { useEffect }

//import Card from "./Card";
import classes from "./PinkButton.module.css";

const PinkButton = (props) => {
  return (
    <>
      <button
        className={`${classes[`form-button`]} ${props.className}`}
        type={props.type}
      >
        {props.label}
      </button>
    </>
  );
};

export default PinkButton;
