import React from "react";
import classes from "./PeopleCard.module.css";

const PeapleCard = (props) => {
  return (
    <div  
    className={classes.card_container}
    style={{ backgroundImage: `url(${props.img})` }}
    
    >
      <div className={classes.identity}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.info}>{props.info} </div>
      </div>
    </div>
  );
};
export default PeapleCard;
