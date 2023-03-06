import React, { useState ,useEffect } from "react";
import PinkButton from "../../PinkButton";
import classes from "./FirstSectionCarousel.module.css";
import Swing from "./Swing";

export default function FirstSectionCarousel() {
  const [backGroundNum, setBackGroundNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      changeBackGroundHandler();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const changeBackGroundHandler = (e) => {
    setBackGroundNum((p) => {
      console.log(p);
      return p === 3 ? 0 : p + 1;
    });
   }; //setInterval(changeBackGroundHandler,3000)
  return (
    <div className={classes.bigContainer}>
      <button
        className={classes.prevBtn}
        onClick={() => {
          setBackGroundNum((p) => {
            console.log(p);
            return p === 0 ? 3 : p - 1;
          });
        }}
      >{`<`}</button>
      <div className={classes.sectionsContainer}>
        <Swing
          className={`${classes.first_poster_container} ${
            backGroundNum !== 0 ? classes.unChoosen : classes.choosen
          } ${classes.all_poster}` }
          title={`THE BATMAN`}
          genre={[`action`,`crime`,`thriller`]}
          rate={8.3}
          overview={`When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.`}


        />
          <Swing
          className={`${classes.second_poster_container} ${
            backGroundNum !== 1 ? classes.unChoosen : classes.choosen
          } ${classes.all_poster}`}
          title={`Mortal Combact`}
          genre={[`action`,`comedy`,`romance`]}
          rate={6.8}
          overview={`MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.`}
        />
          <Swing
          className={`${classes.third_poster_container} ${
            backGroundNum !== 2 ? classes.unChoosen : classes.choosen
          } ${classes.all_poster}`}
          title={`MidWay`}
          genre={[`drama`,`romance`,`history`]}
          rate={7}
          overview={`The story of the Battle of Midway, told by the leaders and the sailors who fought it.

`}
        />
          <Swing
          className={`${classes.forth_poster_container} ${
            backGroundNum !== 3 ? classes.unChoosen : classes.choosen
          } ${classes.all_poster}`}
          title={`Cockaine Beer`}
          genre={[`action`,`crime`,`thriller`]}
          rate={7.6}
          overview={`An oddball group of cops, criminals, tourists and teens converge on a Georgia forest where a huge black bear goes on a murderous rampage after unintentionally ingesting cocaine.`}
        />
      </div>
      <button
        className={classes.nextBtn}
        onClick={changeBackGroundHandler}
      >{`>`}</button>
    </div>
  );
}
