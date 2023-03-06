import React from "react";
import classes from "./ReadMoreButton.module.css";

const ReadMoreButton = (props) => {
  return (
   
        <button
        
        onClick={props.onClick}

         className={classes.read_more_button}> {props.label?props.label:`Read more`}</button>

  );
};

export default ReadMoreButton;
